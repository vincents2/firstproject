from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_put,
  template_delete
)


from firstproject.app import app


dbTable = 'tblMa'
dbKeyAttrs = ('id',)
dbAttrs = (
  'vorname',
  'nachname',
  'telefon1',
  'telefon2',
  'email',
  'strasse',
  'hausnummer',
  'plz',
  'ort',
  'geburtsdatum',
  'qualifikationen',
  'qualifikationsnachweiseAbgegeben',
  'idVertragArt',
  'fuehrungszeugnisAbgegeben',
  'idMaArt',
  'aktiv'
)


@app.route('/ma/', methods=['POST'])
def post_ma():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbAttrs,data=request.data)


@app.route('/ma/', methods=['GET'])
def get_all_ma():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/ma/<int:id>/', methods=['GET'])
def get_ma(id):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))


@app.route('/ma/', methods=['PUT'])
def put_ma():
  print('[from {}] PUT request to {}'.format(request.remote_addr, request.url))
  return template_put(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,data=request.data)


@app.route('/ma/<int:id>/', methods=['DELETE'])
def delete_ma(id):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))