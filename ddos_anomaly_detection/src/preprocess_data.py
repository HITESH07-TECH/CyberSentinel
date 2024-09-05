import pandas as pd
from sklearn.preprocessing import StandardScaler
import joblib

# Load combined data
data = pd.read_csv('data/combined_traffic.csv')

# Ensure correct features are selected
features = ['ip_count', 'request_rate']
scaler = StandardScaler()

# Perform scaling
data[features] = scaler.fit_transform(data[features])

# Save the preprocessed data and the scaler
data.to_csv('data/preprocessed_data.csv', index=False)
joblib.dump(scaler, 'models/scaler.pkl')

# Check if scaling is consistent and separable
print("Feature Summary After Scaling:")
print(data.describe())

print("Data preprocessing complete. Preprocessed data and scaler saved.")
