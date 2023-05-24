import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://api.digital4nurse.ch/api/public/';
  constructor(private http: HttpClient) {}

  getdata() {
    const resource = 'nurse-search';
    return this.http.post(`${this.baseUrl}${resource}`, {
      sort_by: 'name-asc',
    });
  }
}
