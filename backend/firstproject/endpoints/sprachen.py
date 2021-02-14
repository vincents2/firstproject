from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_put,
  template_delete
)


from firstproject.app import app


dbTable = 'tblSprachen'
dbKeyAttrs = ('id',)
dbAttrs = ('bez',)


@app.route('/sprachen/', methods=['POST'])
def post_sprachen():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbAttrs,data=request.data)


@app.route('/sprachen/', methods=['GET'])
def get_all_sprachen():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/sprachen/<int:id>/', methods=['GET'])
def get_sprachen(id):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))


@app.route('/sprachen/', methods=['PUT'])
def put_sprachen():
  print('[from {}] PUT request to {}'.format(request.remote_addr, request.url))
  return template_put(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,data=request.data)


@app.route('/sprachen/<int:id>/', methods=['DELETE'])
def delete_sprachen(id):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))