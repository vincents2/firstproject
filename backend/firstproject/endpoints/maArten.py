from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_put,
  template_delete
)


from firstproject.app import app


dbTable = 'tblMaArten'
dbKeyAttrs = ('id',)
dbAttrs = ('bez',)


@app.route('/maArten/', methods=['POST'])
def post_maArten():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbAttrs,data=request.data)


@app.route('/maArten/', methods=['GET'])
def get_all_maArten():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/maArten/<int:id>/', methods=['GET'])
def get_maArten(id):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))


@app.route('/maArten/', methods=['PUT'])
def put_maArten():
  print('[from {}] PUT request to {}'.format(request.remote_addr, request.url))
  return template_put(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,data=request.data)


@app.route('/maArten/<int:id>/', methods=['DELETE'])
def delete_maArten(id):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))