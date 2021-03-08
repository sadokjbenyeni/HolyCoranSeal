import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Seal } from './home-page/home-page.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SealDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getSeals(): Observable<any> {
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.get(url);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
