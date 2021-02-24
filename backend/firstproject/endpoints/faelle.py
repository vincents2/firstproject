from flask import request
from firstproject.endpoints.template import (
  template_post,
  template_get_all,
  template_get,
  template_put,
  template_delete
)
from firstproject.app import app


dbTable = 'tblFaelle'
dbKeyAttrs = ('id',)
dbAttrs = (
  'nachname',
  'idJa',
  'bewilligtBisAufWeiteres',
  'bewilligtBis',
  'hpg',
  'hpgProtokoll',
  'bemerkung',
  'idBereich',
  'idHilfeArt',
  'idSprache',
  'geschaeftszeichen',
  'rechnungskreis',
  'einverstaendnis',
  'ressourcenkarte',
  'genogramm',
  'starterpaketAnMa',
  'kostenanerkenntnis',
  'bewilligungsvereinbarungen',
  'flsUmfangWoche',
  'fahrtstreckenInKm',
  'fahrtenProMonat',
  'verweis',
  'archiviert',
  'dateCreated'
)


@app.route('/faelle/', methods=['POST'])
def post_faelle():
  print('[from {}] POST request to {}'.format(request.remote_addr, request.url))
  return template_post(dbTable=dbTable,dbAttrs=dbAttrs,data=request.data)


@app.route('/faelle/', methods=['GET'])
def get_all_faelle():
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get_all(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs)


@app.route('/faelle/<int:id>/', methods=['GET'])
def get_faelle(id):
  print('[from {}] GET request to {}'.format(request.remote_addr, request.url))
  return template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))


@app.route('/faelle/', methods=['PUT'])
def put_faelle():
  print('[from {}] PUT request to {}'.format(request.remote_addr, request.url))
  return template_put(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,data=request.data)


@app.route('/faelle/<int:id>/', methods=['DELETE'])
def delete_faelle(id):
  print('[from {}] DELETE request to {}'.format(request.remote_addr, request.url))
  return template_delete(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=(id,))