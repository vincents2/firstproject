import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ma } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class MaService {
  
  path = 'ma'

  constructor(private http: HttpClient) { }

  post(item: Ma) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Ma) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: Ma) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: Ma) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
