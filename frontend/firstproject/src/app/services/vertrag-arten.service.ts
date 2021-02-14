import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VertragArt } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class VertragArtenService {
  
  path = 'vertragArten'

  constructor(private http: HttpClient) { }

  post(item: VertragArt) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: VertragArt) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: VertragArt) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: VertragArt) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
