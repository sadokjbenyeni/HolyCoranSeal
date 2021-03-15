import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class SealDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';
  private data = {
    title: ''
  };
  public getSeals(): any {
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.get(url);
  }

  public getSealById(id: number): any {
    const url = `${this.apiBaseUrl}/seal/${id}`;
    return this.http.get(url);
  }

  public createNewSeal(title: string): any {
    this.data.title = title;
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.post(url, this.data).toPromise().then(response => response as any).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
