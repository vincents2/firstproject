-- database

DROP DATABASE IF EXISTS dbFirstproject;
CREATE DATABASE IF NOT EXISTS dbFirstproject;

USE dbFirstproject;

-- tables

DROP TABLE IF EXISTS tblFaelle_JaMa;
DROP TABLE IF EXISTS tblFaelle_Ma;
DROP TABLE IF EXISTS tblZiele;
DROP TABLE IF EXISTS tblFaelle;
DROP TABLE IF EXISTS tblJaMa;
DROP TABLE IF EXISTS tblJa;
DROP TABLE IF EXISTS tblMa_Sprachen;
DROP TABLE IF EXISTS tblMa;
DROP TABLE IF EXISTS tblMaArten;
DROP TABLE IF EXISTS tblSprachen;
DROP TABLE IF EXISTS tblBereiche;
DROP TABLE IF EXISTS tblHilfeArten;
DROP TABLE IF EXISTS tblVertragArten;

CREATE TABLE tblVertragArten ( -- tblContractTypes
  id INT PRIMARY KEY AUTO_INCREMENT,
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblHilfeArten ( -- tblHelpTypes
  id INT PRIMARY KEY AUTO_INCREMENT,
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblBereiche ( -- tblAreas
  id INT PRIMARY KEY AUTO_INCREMENT,
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblSprachen ( -- tblLanguages
  id INT PRIMARY KEY AUTO_INCREMENT,
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblMaArten ( -- tblEmployeeTypes
  id INT PRIMARY KEY AUTO_INCREMENT,
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblMa ( -- tblEmployees
  id INT PRIMARY KEY AUTO_INCREMENT,
  vorname VARCHAR(32) NOT NULL,
  nachname VARCHAR(32) NOT NULL,
  telefon1 VARCHAR(32),
  telefon2 VARCHAR(32),
  email VARCHAR(32),
  strasse VARCHAR(32),
  hausnummer VARCHAR(32),
  plz VARCHAR(32),
  ort VARCHAR(32),
  geburtsdatum DATE,
  qualifikationen VARCHAR(32),
  qualifikationsnachweiseAbgegeben BOOLEAN,
  idVertragArt INT REFERENCES tblVertragArten(id),
  fuehrungszeugnisAbgegeben BOOLEAN,
  idMaArt INT REFERENCES tblMaArten(id),
  aktiv BOOLEAN,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblMa_Sprachen ( -- tblEmployees_Languages
  idMa INT NOT NULL REFERENCES tblMa(id),
  idSprache INT NOT NULL REFERENCES tblSprachen(id),
  dateCreated DATE NOT NULL
);

CREATE TABLE tblJa ( -- tblYWOs (YWO = Youth Welfare Office)
  id INT PRIMARY KEY AUTO_INCREMENT,
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblJaMa ( -- tblYWOsEmployees
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  idJa INT NOT NULL REFERENCES tblJa(id),
  vorname VARCHAR(32),
  nachname VARCHAR(32) NOT NULL,
  telefon VARCHAR(32),
  email VARCHAR(32),
  dateCreated DATE NOT NULL
);

CREATE TABLE tblFaelle ( -- tblCases
  id INT PRIMARY KEY AUTO_INCREMENT,
  nachname VARCHAR(32) NOT NULL,
  idJa INT REFERENCES tblJa(id),
  bewilligtBisAufWeiteres BOOLEAN,
  bewilligtBis DATE,
  hpg DATE,
  hpgProtokoll VARCHAR(256),
  bemerkung VARCHAR(256),
  idBereich INT REFERENCES tblBereiche(id),
  idHilfeArt INT REFERENCES tblHilfeArten(id),
  idSprache INT REFERENCES tblSprachen(id),
  geschaeftszeichen VARCHAR(32),
  rechnungskreis VARCHAR(32),
  einverstaendnis BOOLEAN,
  ressourcenkarte BOOLEAN,
  genogramm BOOLEAN,
  starterpaketAnMa VARCHAR(32),
  hilfeplanAnMa VARCHAR(32),
  kostenanerkenntnis BOOLEAN,
  bewilligungsvereinbarungen VARCHAR(256),
  flsUmfangWoche DECIMAL(4,1),
  fahrtstreckenInKm DECIMAL(4,1),
  fahrtenProMonat DECIMAL(4,1),
  verweis BOOLEAN,
  archiviert BOOLEAN NOT NULL DEFAULT FALSE,
  dateCreated DATE NOT NULL
);

CREATE TABLE tblZiele ( -- tblGoals
  id INT NOT NULL AUTO_INCREMENT,
  idFall INT NOT NULL REFERENCES tblFaelle(id),
  bez VARCHAR(32) NOT NULL,
  dateCreated DATE NOT NULL,
  PRIMARY KEY (id,idFall)
);

CREATE TABLE tblFaelle_Ma ( -- tblCases_Employees
  idFall INT NOT NULL REFERENCES tblFaelle(id),
  idMa INT NOT NULL REFERENCES tblMa(id),
  urlaubsvertretung BOOLEAN NOT NULL,
  dateCreated DATE NOT NULL,
  PRIMARY KEY (idFall,idMa)
);

CREATE TABLE tblFaelle_JaMa ( -- tblCases_YWOsEmployees
  idFall INT NOT NULL REFERENCES tblFaelle(id),
  idJaMa INT NOT NULL REFERENCES tblJaMa(id),
  dateCreated DATE NOT NULL,
  PRIMARY KEY (idFall,idJaMa)
);

-- log

SET global general_log_file = 'C:/Users/inovi/Desktop/firstproject/database/mysql.log';
SET global general_log = on;
SET global log_output = file;