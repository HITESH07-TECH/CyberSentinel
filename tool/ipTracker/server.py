from flask import Flask, jsonify, render_template
import re
from collections import Counter

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('analytics.html')

@app.route('/data')
def data():
    log_file_path = '/var/log/nginx/access.log'
    ip_pattern = re.compile(r'(\d+\.\d+\.\d+\.\d+)')
    
    ip_counts = Counter()
    
    try:
        with open(log_file_path, 'r') as file:
            for line in file:
                ips = ip_pattern.findall(line)
                for ip in ips:
                    ip_counts[ip] += 1
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    # Convert counter to list of dicts
    ip_data = [{'ip': ip, 'count': count} for ip, count in ip_counts.items()]
    
    return jsonify(ip_data)

if __name__ == '__main__':
    app.run(debug=True)
