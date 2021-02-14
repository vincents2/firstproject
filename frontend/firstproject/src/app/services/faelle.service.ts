import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fall } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class FaelleService {
  
  path = 'faelle'

  constructor(private http: HttpClient) { }

  post(item: Fall) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: Fall) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: Fall) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: Fall) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
