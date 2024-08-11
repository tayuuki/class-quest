from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # CORSを有効にする

def get_db_connection():
    conn = sqlite3.connect('server.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/user', methods=['GET'])
def get_user():
    conn = get_db_connection()
    user_rows = conn.execute('SELECT * FROM user').fetchall()
    conn.close()
    user_list = [dict(row) for row in user_rows]
    return jsonify(user_list)

@app.route('/profile', methods=['GET'])
def get_profile():
    conn = get_db_connection()
    profile_rows = conn.execute('SELECT * FROM profile').fetchall()
    conn.close()
    profile_list = [dict(row) for row in profile_rows]
    return jsonify(profile_list)

@app.route('/lecture', methods=['GET'])
def get_lecture():
    conn = get_db_connection()
    lecture_rows = conn.execute('SELECT * FROM lecture').fetchall()
    conn.close()
    lecture_list = [dict(row) for row in lecture_rows]
    return jsonify(lecture_list)

@app.route('/work', methods=['GET'])
def get_work():
    conn = get_db_connection()
    work_rows = conn.execute('SELECT * FROM work').fetchall()
    conn.close()
    work_list = [dict(row) for row in work_rows]
    return jsonify(work_list)

@app.route('/list', methods=['GET'])
def get_list():
    conn = get_db_connection()
    list_rows = conn.execute('SELECT * FROM list').fetchall()
    conn.close()
    list_list = [dict(row) for row in list_rows]
    return jsonify(list_list)

if __name__ == '__main__':
    app.run(debug=True)
