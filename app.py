from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="INSERT_YOUR_PASSWORD_HERE", 
        database="users"
    )

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    try:
        db = get_db_connection()
        cursor = db.cursor()
        
        check_query = "SELECT * FROM users1 WHERE username = %s"
        cursor.execute(check_query, (username,))
        if cursor.fetchone():
            return jsonify({"status": "error", "message": "Username already exists"}), 400

        query = "INSERT INTO users1 (username, password) VALUES (%s, %s)"
        cursor.execute(query, (username, password))
        db.commit()

        cursor.close()
        db.close()
        return jsonify({"status": "success"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": "Database error"}), 500


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    try:
        db = get_db_connection()
        cursor = db.cursor()

        query = "SELECT * FROM users1 WHERE username = %s AND password = %s"
        cursor.execute(query, (username, password))
        user = cursor.fetchone()

        cursor.close()
        db.close()

        if user:
            return jsonify({"status": "success"}), 200
        else:
            return jsonify({"status": "error", "message": "Invalid username or password"}), 401

    except Exception as e:
        return jsonify({"status": "error", "message": "Database error"}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)