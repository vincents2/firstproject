import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendServer } from '../common/connection';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  post(endpoint: string, item: any) {
    return this.http.post(`${backendServer}/${endpoint}/`, JSON.stringify(item));
  }
  
  get(endpoint: string) {
    return this.http.get(`${backendServer}/${endpoint}/`);
  }
  
  put(endpoint: string, item: any) {
    return this.http.put(`${backendServer}/${endpoint}/`, JSON.stringify(item));
  }

  delete(endpoint: string) {
    return this.http.delete(`${backendServer}/${endpoint}/`)
  }
}
