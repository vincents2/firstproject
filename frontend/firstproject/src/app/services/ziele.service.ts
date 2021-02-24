import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ziel } from '../common/interfaces';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class ZieleService {
  
  path = 'ziele'

  constructor(private http: HttpClient) { }

  post(item: Ziel) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Ziel) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: Ziel) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: Ziel) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
