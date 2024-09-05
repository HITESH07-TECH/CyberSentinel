import pandas as pd
from sklearn.model_selection import train_test_split, RandomizedSearchCV, StratifiedKFold
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
import joblib

# Load preprocessed data
data = pd.read_csv('data/preprocessed_data.csv')

# Split data into features and labels
X = data[['ip_count', 'request_rate']]
y = data['label']

# Check the distribution of normal vs. anomalous samples
normal_count = len(y[y == 0])
anomalous_count = len(y[y == 1])
contamination_rate = anomalous_count / (normal_count + anomalous_count)

print(f"Normal Count: {normal_count}, Anomalous Count: {anomalous_count}")
print(f"Contamination rate: {contamination_rate}")

# Standardize the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split into training and testing sets with stratification
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42, stratify=y)

# Define the model
model = IsolationForest(random_state=42)

# Set up the parameter grid for Randomized Search
param_dist = {
    'n_estimators': [100, 200, 300],
    'max_samples': ['auto', 0.5, 0.7],
    'contamination': [0.01, 0.05, 0.1],  # Reduce the range to small values
    'max_features': [0.5, 0.7, 1.0]
}


# Perform Randomized Search with cross-validation
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
random_search = RandomizedSearchCV(estimator=model, param_distributions=param_dist, n_iter=100, scoring='accuracy', cv=skf, n_jobs=-1, verbose=2, random_state=42)
random_search.fit(X_train, y_train)

# Best parameters found by Randomized Search
best_params = random_search.best_params_
print(f"Best Parameters: {best_params}")

# Train the Isolation Forest model with the best parameters
best_model = IsolationForest(
    n_estimators=best_params['n_estimators'],
    max_samples=best_params['max_samples'],
    contamination=best_params['contamination'],
    max_features=best_params['max_features'],
    random_state=42
)
best_model.fit(X_train)

# Save the scaler and model
joblib.dump(scaler, 'models/scaler.pkl')
joblib.dump(best_model, 'models/anomaly_detection_model.pkl')

# Predict on the test set
y_pred = best_model.predict(X_test)
# Convert Isolation Forest output (-1 for anomaly, 1 for normal) to your labels
y_pred = [1 if x == -1 else 0 for x in y_pred]

# Print classification report and accuracy score
print("Classification Report:")
print(classification_report(y_test, y_pred))
print(f"Test Accuracy: {accuracy_score(y_test, y_pred)}")

# Confusion Matrix to check false positives and negatives
print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

print("Model training complete. Model saved.")
