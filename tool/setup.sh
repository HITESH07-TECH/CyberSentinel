#!/bin/bash

# 1. IP Filtering and Rate Limiting using iptables

# Clear previous iptables rules
sudo iptables -F
sudo iptables -X

# Basic IP filtering: Allow SSH, HTTP, and HTTPS traffic
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Rate limiting: Limit new connections per minute per IP address (e.g., 60 per minute)
sudo iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 20 -j DROP

# Save iptables rules
sudo iptables-save > /etc/iptables/rules.v4

# 2. Basic WAF using ModSecurity (Assumes ModSecurity is installed with Nginx)
sudo chmod +777 /etc/blocked_ips.txt
# Enable ModSecurity in Nginx
echo "
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name _;
    
    root /var/www/html;
    index index.html index.htm index.nginx-debian.html; 

    location / {
        try_files $uri $uri/ =404;
        #proxy_cache my_cache;
        #proxy_pass http://127.0.0.1:8080;
        ##add_header X-Proxy-Cache $upstream_cache_status;# Adjust to your backend server
    }
}" > /etc/nginx/sites-available/default

# Reload Nginx to apply changes
#nginx -s reload

# 3
# Reload Nginx
sudo nginx -s reload

pip3 install psutil --break-system-packages

sudo wget https://raw.githubusercontent.com/HITESH07-TECH/CyberSentinel/main/tool/ddos_protect.py -O /opt/ddos_protect.py
echo "
[Unit]
Description=DDoS Protection Script
After=network.target

[Service]
ExecStart=/usr/bin/python3 /opt/ddos_protect.py
Restart=always
User=root
WorkingDirectory=/opt
StandardOutput=inherit
StandardError=inherit
RestartSec=10

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/ddos_protect.service

sudo systemctl daemon-reload
sudo systemctl enable ddos_protect.service
sudo systemctl start ddos_protect.service



# Install required Python packages


echo "DDoS protection setup complete."

