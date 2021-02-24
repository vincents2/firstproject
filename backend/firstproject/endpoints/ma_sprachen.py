from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_delete
)
from firstproject.app import app


dbTable = 'tblMa_Sprachen'
dbKeyAttrs = ('idMa', 'idSprache')
dbAttrs = ('dateCreated',)


@app.route('/ma_sprachen/', methods=['POST'])
def post_ma_sprachen():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbKeyAttrs,data=request.data)


@app.route('/ma_sprachen/', methods=['GET'])
def get_all_ma_sprachen():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/ma_sprachen/<int:id>/', methods=['GET'])
def get_ma_sprachen(id):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))


@app.route('/ma_sprachen/<int:id>/', methods=['DELETE'])
def delete_ma_sprachen(id):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))