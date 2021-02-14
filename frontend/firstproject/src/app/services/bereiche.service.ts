import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bereich } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class BereicheService {
  
  path = 'bereiche'

  constructor(private http: HttpClient) { }

  post(item: Bereich) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Bereich) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: Bereich) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: Bereich) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
