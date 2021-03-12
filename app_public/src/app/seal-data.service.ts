import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SealDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getSeals(): any {
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.get(url);
  }

  public getSealById(sealId: number): any {
    const url = `${this.apiBaseUrl}/seal/${sealId}`;
    return this.http.get(url);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
