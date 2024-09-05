import pandas as pd
import numpy as np

# Define the number of samples for normal and DDoS data
num_normal_samples = 10000  # Increase number of normal samples
num_ddos_samples = 1000     # Increase number of DDoS samples

# Generate normal traffic data
normal_data = pd.DataFrame({
    'timestamp': pd.date_range(start='2024-01-01', periods=num_normal_samples, freq='min'),
    'ip_count': np.random.poisson(lam=10, size=num_normal_samples),  # Average 10 IPs per minute
    'request_rate': np.random.normal(loc=50, scale=5, size=num_normal_samples),  # 50 requests per minute
})
normal_data['label'] = 0  # Label 0 for normal
normal_data.to_csv('data/normal_traffic.csv', index=False)

# Generate DDoS traffic data
ddos_data = pd.DataFrame({
    'timestamp': pd.date_range(start='2024-01-01', periods=num_ddos_samples, freq='min'),
    'ip_count': np.random.poisson(lam=500, size=num_ddos_samples),  # Spike in IP count
    'request_rate': np.random.normal(loc=1000, scale=50, size=num_ddos_samples),  # High request rate
})
ddos_data['label'] = 1  # Label 1 for DDoS
ddos_data.to_csv('data/ddos_traffic.csv', index=False)

# Combine both normal and DDoS traffic data
combined_data = pd.concat([normal_data, ddos_data])
combined_data.to_csv('data/combined_traffic.csv', index=False)

print("Data generation complete. Files saved in the 'data' folder.")
