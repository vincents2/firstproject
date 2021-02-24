import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fall_JaMa } from '../common/interfaces';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class FaelleJaMaService {
  
  path = 'faelle_jaMa'

  constructor(private http: HttpClient) { }

  post(item: Fall_JaMa) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Fall_JaMa) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.idFall}/` : ''}`);
  }

  delete(item: Fall_JaMa) {
    return this.http.delete(`${backendServer}/${this.path}/${item.idFall}/${item.idJaMa}/`)
  }
}
