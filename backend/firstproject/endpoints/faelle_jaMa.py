from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_delete
)
from firstproject.app import app


dbTable = 'tblFaelle_JaMa'
dbKeyAttrs = ('idFall', 'idJaMa')
dbAttrs = ('dateCreated',)


@app.route('/faelle_jaMa/', methods=['POST'])
def post_faelle_jaMa():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbAttrs,data=request.data)


@app.route('/faelle_jaMa/', methods=['GET'])
def get_all_faelle_jaMa():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/faelle_jaMa/<int:idFall>/', methods=['GET'])
def get_faelle_jaMa(idFall):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(idFall,))


@app.route('/faelle_jaMa/<int:idFall>/<int:idJaMa>/', methods=['DELETE'])
def delete_faelle_jaMa(idFall, idJaMa):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(idFall, idJaMa))