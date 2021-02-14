from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_put,
  template_delete
)


from firstproject.app import app


dbTable = 'tblJaMa'
dbKeyAttrs = ('id',)
dbAttrs = (
  'idJa',
  'vorname',
  'nachname',
  'telefon',
  'email'
)


@app.route('/jaMa/', methods=['POST'])
def post_jaMa():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbAttrs,data=request.data)


@app.route('/jaMa/', methods=['GET'])
def get_all_jaMa():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/jaMa/<int:id>/', methods=['GET'])
def get_jaMa(id):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))


@app.route('/hilfeArten/', methods=['PUT'])
def put_jaMa():
  print('[from {}] PUT request to {}'.format(request.remote_addr, request.url))
  return template_put(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,data=request.data)


@app.route('/jaMa/<int:id>/', methods=['DELETE'])
def delete_jaMa(id):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))