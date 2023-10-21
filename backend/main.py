from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)

# Configure CORS to allow requests from any origin
CORS(app)

@app.route('/submit-data', methods=['POST'])
def submit_data():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Extract 'name' and 'time' from the JSON data
        name = data.get('name')
        time = data.get('time')

        # Process the data as needed (for example, print it)
        print(f"Received Data - Name: {name}, Time: {time}")

        # Return a success response
        return jsonify({'message': 'Data received successfully'}), 200
    except Exception as e:
        # Handle any exceptions or errors here
        print("Error:", str(e))
        return jsonify({'error': 'An error occurred'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
