from waitress import serve


from firstproject.app import app
from firstproject.endpoints import faelle


if __name__ == '__main__':
  serve(app, host='0.0.0.0',port=5000,threads=1)