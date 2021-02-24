import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ma_Sprache } from '../common/interfaces';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class MaSprachenService {
  
  path = 'ma_sprachen'

  constructor(private http: HttpClient) { }

  post(item: Ma_Sprache) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Ma_Sprache) {
    return this.http.get(`${backendServer}/${this.path}/${item ? item.idMa? `${item.idMa}` : `${item.idSprache}` : ''}`);
  }

  delete(item: Ma_Sprache) {
    return this.http.delete(`${backendServer}/${this.path}/${item.idMa}/${item.idSprache}/`)
  }
}
