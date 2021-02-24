import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaArt } from '../common/interfaces';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class MaArtenService {
  
  path = 'maArten'

  constructor(private http: HttpClient) { }

  post(item: MaArt) {
    return this.http.post(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  get(item?: MaArt) {
    return this.http.get(`${backendServer}/${this.path}/${item ? `${item.id}/` : ''}`);
  }

  put(item: MaArt) {
    return this.http.put(`${backendServer}/${this.path}/`, JSON.stringify(item));
  }

  delete(item: MaArt) {
    return this.http.delete(`${backendServer}/${this.path}/${item.id}/`)
  }
}
