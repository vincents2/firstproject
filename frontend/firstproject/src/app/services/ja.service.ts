import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ja } from '../common/interfaces';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class JaService {
  
  path = 'ja'

  constructor(private http: HttpClient) { }

  post(item: Ja) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Ja) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: Ja) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: Ja) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
