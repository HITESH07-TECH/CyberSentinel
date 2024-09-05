from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)
model = joblib.load('models/anomaly_detection_model.pkl')
scaler = joblib.load('models/scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Convert input data to DataFrame
        df = pd.DataFrame(data)
        # Scale the input data
        scaled_data = scaler.transform(df)
        print("Scaled Input Data:", pd.DataFrame(scaled_data, columns=df.columns))
        # Convert scaled data to numpy array before prediction
        prediction = model.predict(scaled_data)
        # Convert -1 to 1 for anomaly detection
        prediction = [1 if x == -1 else 0 for x in prediction]
        return jsonify(prediction)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
