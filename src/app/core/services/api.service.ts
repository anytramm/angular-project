import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player, PlayersList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private _url = 'https://www.balldontlie.io/api/v1/';

  constructor(private http: HttpClient) { }


  public getPlayers(page: number, perPage: number = 10): Observable<PlayersList> {
    const path = `${this._url}/players?page=${page}&per_page=${perPage}`;

    return this.http.get(path) as Observable<PlayersList>;
  };

  public getPlayer(id: number): Observable<Player> {
    const path =`${this._url}/players/${id}`;
    
    return this.http.get(path) as Observable<Player>;
  }
}
