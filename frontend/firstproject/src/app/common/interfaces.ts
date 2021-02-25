
export enum HttpMethod { POST, GET, PUT, DELETE }

export interface SyncItem {
  method: HttpMethod;
  item?: any;
}

interface BaseItem {
  id?: number;
  tempId?: number;
  dateCreated: Date;
}

export interface VertragArt extends BaseItem { bez: string; }

export interface HilfeArt extends BaseItem { bez: string; }

export interface Bereich extends BaseItem { bez: string; }

export interface Sprache extends BaseItem { bez: string; }

export interface MaArt extends BaseItem { bez: string; }

export interface Ma extends BaseItem {
  anrede: string;
  vorname: string;
  nachname: string;
  telefon1?: string;
  telefon2?: string;
  email?: string;
  strasse?: string;
  hausnummer?: string;
  plz?: string;
  ort?: string;
  geburtsdatum?: Date;
  qualifikationen?: string;
  qualifikationsnachweiseAbgegeben?: boolean;
  idVertragArt?: number;
  fuehrungszeugnisAbgegeben?: boolean;
  idMaArt?: number;
  aktiv?: boolean;
}

export interface Ma_Sprache {
  idMa: number;
  idSprache: number;
}

export interface Ja extends BaseItem { bez: string; }

export interface JaMa extends BaseItem {
  idJa: number;
  anrede: string;
  vorname?: string;
  nachname: string;
  telefon?: string;
  email?: string;
}

export interface Fall extends BaseItem {
  nachname: string;
  idJa?: number;
  bewilligtBisAufWeiteres?: boolean;
  bewilligtBis?: Date;
  hpg?: Date;
  hpgProtokoll?: string;
  bemerkung?: string;
  idBereich?: number;
  idHilfeArt?: number;
  idSprache?: number;
  geschaeftszeichen?: string;
  rechnungskreis?: string;
  einverstaendnis?: boolean;
  ressourcenkarte?: boolean;
  genogramm?: boolean;
  starterpaketAnMa?: string;
  hilfeplanAnMa?: string;
  kostenanerkenntnis?: boolean;
  bewilligungsvereinbarungen?: string;
  flsUmfangWoche?: number;
  fahrtstreckenInKm?: number;
  fahrtenProMonat?: number;
  verweis?: boolean;
  archiviert: boolean;
}

export interface Ziel extends BaseItem {
  idFall: number;
  bez: string;
}

export interface Fall_Ma {
  idFall: number;
  idMa: number;
  urlaubsvertretung: boolean;
}

export interface Fall_JaMa {
  idFall: number;
  idJaMa: number;
}
