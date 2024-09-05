import os
import time
import psutil
from collections import defaultdict

# Configuration
RATE_LIMIT = 100  # Max requests per minute per IP
MONITOR_INTERVAL = 60  # Interval to check for anomalies in seconds
TRAFFIC_THRESHOLD = 100000  # Traffic threshold in bytes
LOG_FILE = '/var/log/nginx/access.log'  # Adjust based on your access log location
BLOCKED_IPS = '/etc/blocked_ips.txt'  # File to store blocked IPs
LOG_FILE_BLOCK = '/var/log/ddos_block.log'  # Log file for IP blocking actions

# Data structures to keep track of request counts
ip_requests = defaultdict(int)
blocked_ips = set()

def block_ip(ip):
    if ip not in blocked_ips:
        os.system(f"iptables -A INPUT -s {ip} -j DROP")
        blocked_ips.add(ip)
        with open(BLOCKED_IPS, 'a') as f:
            f.write(f"{ip}\n")
        with open(LOG_FILE_BLOCK, 'a') as f:
            f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} - Blocked IP: {ip}\n")

def unblock_ip(ip):
    if ip in blocked_ips:
        os.system(f"iptables -D INPUT -s {ip} -j DROP")
        blocked_ips.remove(ip)
        with open(BLOCKED_IPS, 'r') as f:
            lines = f.readlines()
        with open(BLOCKED_IPS, 'w') as f:
            for line in lines:
                if line.strip() != ip:
                    f.write(line)
        with open(LOG_FILE_BLOCK, 'a') as f:
            f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} - Unblocked IP: {ip}\n")

def read_logs():
    with open(LOG_FILE, 'r') as file:
        lines = file.readlines()
    return lines

def parse_logs(log_lines):
    global ip_requests
    ip_requests.clear()
    for line in log_lines:
        parts = line.split()
        ip = parts[0]
        ip_requests[ip] += 1

def check_rate_limit():
    for ip, count in ip_requests.items():
        if count > RATE_LIMIT:
            block_ip(ip)

def monitor_traffic(previous_counters):
    current_counters = psutil.net_io_counters()
    bytes_received = current_counters.bytes_recv - previous_counters.bytes_recv
    if bytes_received > TRAFFIC_THRESHOLD:
        print(f"High traffic detected: {bytes_received} bytes received.")
    return current_counters

def main():
    os.system(f"rm -fr /var/log/nginx/access.log && systemctl restart nginx.service && iptables -F ")    
    previous_counters = psutil.net_io_counters()
    
    while True:
        # Read and process logs
        log_lines = read_logs()
        parse_logs(log_lines)
        check_rate_limit()
        
        # Monitor network traffic
        previous_counters = monitor_traffic(previous_counters)
        
        # Wait before the next iteration
        time.sleep(MONITOR_INTERVAL)

if __name__ == "__main__":
    main()

