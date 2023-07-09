import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { Http, Headers, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  //  env = environment;
  private baseUrl: string = '';
  private apiKey: string = '';
  private secret: string = '';

  constructor(private httpClinet: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.apiKey = environment.petFinderApi;
    this.secret = environment.petfinderSecret;

  }
  // grant_type:string, client_id:string,client_secret:string
  // `grant_type=${'client_credentials'}&client_id=${this.apiKey}&client_secret=${this.secret}`
  postGetToken(): Observable<Object> {
    const url = `${this.baseUrl}`;

    const result =this.httpClinet.post(url + 'oauth2/token', {
      "grant_type": `${'client_credentials'}`,
      "client_id": `${this.apiKey}`,
      "client_secret": `${this.secret}`
    });
    return result;
  }
  getFilteredRequest(auth_token: any, type: string, good_with_children: boolean, age: string, gender: string, size: string): Observable<any> {
    const url = `${this.baseUrl}animals?type=${type}&good_with_children=${good_with_children}&age=${age}&gender=${gender}&size=${size}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    })
      return this.httpClinet.get(url, { headers: headers })

  }
  getSingleAnimal( id: string): Observable<any> {
    let token = localStorage.getItem( 'token' );
    console.log('get Single animal',token);

    const url = `${this.baseUrl}animals/${id}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    console.log(url,'uuuuuuuu');

    return this.httpClinet.get(url, { headers: headers })
  }

}
