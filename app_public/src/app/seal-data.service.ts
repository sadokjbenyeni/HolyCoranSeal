import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class SealDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';
  private newSeal = {
    title: ''
  };
  private sealToUpdate = {
    readers: new Array<any>(),
    states: new Array<any>(),
  };
  public getSeals(): any {
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.get(url);
  }

  public getOneSeal(id?: any): any {
    const url = `${this.apiBaseUrl}/seal`;
    return this.http.get(url, id);
  }

  public createNewSeal(title: string): any {
    this.newSeal.title = title;
    const url = `${this.apiBaseUrl}/seals`;
    return this.http.post(url, this.newSeal).toPromise().then(response => response as any).catch(this.handleError);
  }

  public updateSeal(readers: any, states: any, sealid: number): any {
    const url = `${this.apiBaseUrl}/seal/${sealid}`;
    this.sealToUpdate.readers = readers;
    this.sealToUpdate.states = states;
    console.log(this.sealToUpdate);
    return this.http.put(url, this.sealToUpdate).toPromise().then(response => response as any).catch(this.handleError);
  }

  public deleteSeal(id: number): any {
    const url = `${this.apiBaseUrl}/seal/${id}`;
    return this.http.delete(url).toPromise().then(response => response as any).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
