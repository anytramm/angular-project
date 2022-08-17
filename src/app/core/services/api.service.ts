import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private _url = 'https://www.balldontlie.io/api/v1/';

  constructor(private http: HttpClient) { }


  public getPlayers(page: number, perPage: number = 25): Observable<any> {
    const path = `${this._url}/players?page=${page}&per_page=${perPage}`;

    return this.http.get(path);
  }
}
