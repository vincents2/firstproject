from setuptools import setup

setup(
  name='firstproject',
  packages=['firstproject'],
  include_package_data=True,
  install_requires=[
    'flask',
    'flask-cors',
    'mysql-connector-python',
    'waitress'
  ]
)
