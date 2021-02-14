import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fall_Ma } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class FaelleMaService {
  
  path = 'faelle_ma'

  constructor(private http: HttpClient) { }

  post(item: Fall_Ma) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Fall_Ma) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.idFall}/` : ''}`);
  }

  delete(item: Fall_Ma) {
    return this.http.delete(`${backendServer}/${this.path}/${item.idFall}/${item.idMa}/`)
  }
}
