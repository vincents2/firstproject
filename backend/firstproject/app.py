import mysql.connector
from flask import Flask
from flask_cors import CORS
from waitress import serve


app = Flask(__name__)
CORS(app)


db = mysql.connector.connect(
  host='localhost',
  user='root',
  password='root',
  database='dbFirstproject'
)

conn = db.cursor()