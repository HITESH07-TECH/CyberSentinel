from flask import Flask, jsonify, render_template
import os
from collections import Counter

app = Flask(__name__)

# Path to the log file
LOG_FILE_PATH = '/var/log/nginx/access.log'

def get_ip_request_count():
    ip_counter = Counter()
    if os.path.exists(LOG_FILE_PATH):
        with open(LOG_FILE_PATH, 'r') as log_file:
            lines = log_file.readlines()
            for line in lines:
                # Assuming IP addresses are in the 0th index of each log entry
                parts = line.strip().split()
                if len(parts) > 0:
                    ip = parts[0]  # Get the IP address from the 0th index
                    ip_counter[ip] += 1
    return dict(ip_counter)

@app.route('/data')
def get_log_data():
    ip_request_count = get_ip_request_count()
    return jsonify(ip_request_count)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
