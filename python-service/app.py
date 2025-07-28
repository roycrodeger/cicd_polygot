from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Home Page"

@app.route('/api/data')
def get_data():
    return jsonify({"service": "python-service", "data" : "Sample data"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001')