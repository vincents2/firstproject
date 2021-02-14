import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprache } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class SprachenService {
  
  path = 'sprachen'

  constructor(private http: HttpClient) { }

  post(item: Sprache) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Sprache) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: Sprache) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: Sprache) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
