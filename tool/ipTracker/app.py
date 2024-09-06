from flask import Flask, render_template, jsonify
import re
from collections import Counter

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/analytics')
def analytics():
    return render_template('analytics.html')

@app.route('/api/requests')
def get_requests():
    # Path to the log file
    log_file_path = '/var/log/nginx/access.log'
    
    try:
        # Read the log file and count requests per IP
        with open(log_file_path, 'r') as file:
            lines = file.readlines()

        ip_addresses = [re.match(r'\S+', line).group(0) for line in lines if re.match(r'\S+', line)]
        ip_counts = dict(Counter(ip_addresses))

        return jsonify(ip_counts)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
