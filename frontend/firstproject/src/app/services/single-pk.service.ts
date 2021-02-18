import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class SinglePkService {

  constructor(private http: HttpClient) { }

  post(endpoint: string, item: any) {
    return this.http.post(`${backendServer}/${endpoint}/`, JSON.stringify(item));
  }
  
  get(endpoint: string, item?: any) {
    return this.http.get(`${backendServer}/${endpoint}/${item ? `${item.id}/` : ''}`);
  }
  
  put(endpoint: string, item: any) {
    return this.http.put(`${backendServer}/${endpoint}/`, JSON.stringify(item));
  }

  delete(endpoint: string, item: any) {
    return this.http.delete(`${backendServer}/${endpoint}/${item.id}/`)
  }
}
