import json, datetime, mysql.connector


db = mysql.connector.connect(
  host='localhost',
  user='root',
  password='root',
  database='dbFirstproject'
)

conn = db.cursor()


def template_post(dbTable: str,dbAttrs: list(),data):
  status = 200

  body = list()
  try:
    body = json.loads(data)
  except:
    status = 500
  
  response = ()
  
  if status == 200:
    query = 'INSERT INTO {} ('.format(dbTable)
    for attr in dbAttrs:
      query += '{},'.format(attr)
    query = query[:-1]
    query += ') VALUES ('
    for attr in dbAttrs:
      query += '%s,'
    query = query[:-1]
    query += ')'
    values = list()
    for attr in dbAttrs:
      values += (body[attr],)

    conn.execute(query, values)
    db.commit()

    response = body
    response['id'] = conn.lastrowid
  return json.dumps(response), status


def template_get_all(dbTable: str,dbKeyAttrs: list(),dbAttrs: list()):
  status = 200
  dbAllAttrs = dbKeyAttrs + dbAttrs

  query = 'SELECT * FROM {}'.format(dbTable)
  # query = 'SELECT '
  # for attr in dbAllAttrs:
  #   query += '{},'.format(attr)
  # query = query[:-1]
  # query += ' FROM {}'.format(dbTable)

  conn.execute(query)
  
  response = list()
  for row in conn.fetchall():
    obj = {}
    for index in range(0, len(dbAllAttrs)):
      obj[dbAllAttrs[index]] = datetime.datetime.combine(row[index], datetime.time.min).isoformat() if isinstance(row[index], datetime.date) else row[index].isoformat() if isinstance(row[index], datetime.datetime) else row[index]
    response.append(obj)
    json.dumps(response)
  
  if not response: status = 600

  return json.dumps(response), status


def template_get(dbTable: str,dbKeyAttrs: list(),dbAttrs: list(),dbKeyValues: list()):
  status = 200
  dbAllAttrs = dbKeyAttrs + dbAttrs

  query = 'SELECT '
  for attr in dbAllAttrs:
    query += '{},'.format(attr)
  query = query[:-1]
  query += ' FROM {} WHERE '.format(dbTable)
  for index in range(0, len(dbKeyAttrs)):
    query += ('{}=\'{}\' AND ' if isinstance(dbKeyValues[index], str) else '{}={} AND ').format(dbKeyAttrs[index], dbKeyValues[index])
  query = query[:-5]

  conn.execute(query)
  
  response = list()
  for row in conn.fetchall():
    obj = {}
    for index in range(0, len(dbAllAttrs)):
      obj[dbAllAttrs[index]] = datetime.datetime.combine(row[index], datetime.time.min).isoformat() if isinstance(row[index], datetime.date) else row[index].isoformat() if isinstance(row[index], datetime.datetime) else row[index]
    response.append(obj)
  
  if not response: status = 600

  return json.dumps(response), status


def template_put(dbTable: str,dbKeyAttrs: list(),dbAttrs: list(),data):
  status = 200
  
  body = list()
  try:
    body = json.loads(data)
    for index in range(0, len(dbKeyAttrs)):
      if dbKeyAttrs[index] not in body:
        status = 501 + index
  except:
    status = 500
  
  if status == 200:
    query = 'UPDATE {} SET '.format(dbTable)
    for index in range(0, len(dbAttrs)):
      query += ('{}=\'{}\',' if isinstance(body[dbAttrs[index]], str) else '{}={},').format(dbAttrs[index], body[dbAttrs[index]])
    query = query[:-1]
    query += ' WHERE '
    for index in range(0, len(dbKeyAttrs)):
      query += ('{}=\'{}\',' if isinstance(body[dbKeyAttrs[index]], str) else '{}={},').format(dbKeyAttrs[index], body[dbKeyAttrs[index]])
    query = query[:-1]
    conn.execute(query)
    db.commit()
    response = body
  
  return json.dumps(response), status


def template_delete(dbTable: str,dbKeyAttrs: list(),dbAttrs: list(),dbKeyValues: list()):
  temp = template_get(dbTable=dbTable,dbKeyAttrs=dbKeyAttrs,dbAttrs=dbAttrs,dbKeyValues=dbKeyValues)
  response = json.loads(temp[0])
  status = temp[1]

  if status == 200:
    query = 'DELETE FROM {} WHERE '.format(dbTable)
    for index in range(0, len(dbKeyAttrs)):
      query += ('{}=\'{}\' AND ' if isinstance(dbKeyValues[index], str) else '{}={} AND ').format(dbKeyAttrs[index], dbKeyValues[index])
    query = query[:-5]
    conn.execute(query)
    db.commit()
  
  return json.dumps(response), status