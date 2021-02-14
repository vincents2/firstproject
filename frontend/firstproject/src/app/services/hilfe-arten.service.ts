import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HilfeArt } from '../common/common';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class HilfeArtenService {
  
  path = 'hilfeArten'

  constructor(private http: HttpClient) { }

  post(item: HilfeArt) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: HilfeArt) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: HilfeArt) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: HilfeArt) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
