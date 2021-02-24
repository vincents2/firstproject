
export enum HttpMethod { POST, GET, PUT, DELETE }

export interface SyncItem {
  method: HttpMethod;
  item?: any;
}

interface BaseIdItem {
  id?: number;
  tempId?: number;
}

interface BaseItem extends BaseIdItem {
  bez: string;
}

export interface VertragArt extends BaseItem { }

export interface HilfeArt extends BaseItem { }

export interface Bereich extends BaseItem { }

export interface Sprache extends BaseItem { }

export interface MaArt extends BaseItem { }

export interface Ma extends BaseIdItem {
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

export interface Ja extends BaseItem { }

export interface JaMa extends BaseIdItem {
  idJa: number;
  anrede: string;
  vorname?: string;
  nachname: string;
  telefon?: string;
  email?: string;
}

export interface Fall extends BaseIdItem {
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
