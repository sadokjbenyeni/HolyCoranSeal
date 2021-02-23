import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Seal } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class SealDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getSeals(): Promise<Seal[]> {
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.get(url).toPromise().then(response => response as Seal[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
