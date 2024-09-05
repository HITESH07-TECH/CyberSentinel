import pandas as pd
from sklearn.metrics import classification_report
import joblib

# Load preprocessed data and model
data = pd.read_csv('data/preprocessed_data.csv')
model = joblib.load('models/anomaly_detection_model.pkl')

# Prepare test data
X_test = data[['ip_count', 'request_rate']]
y_test = data['label']

# Predict using the loaded model
y_pred = model.predict(X_test)
# Map Isolation Forest output (-1 for anomaly, 1 for normal) to your labels
y_pred = [1 if x == -1 else 0 for x in y_pred]

# Print the classification report
print(classification_report(y_test, y_pred))
