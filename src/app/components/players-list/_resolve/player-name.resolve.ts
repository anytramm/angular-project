import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable, of } from "rxjs";
import { Player } from "src/app/core/models";
import { ApiService } from "src/app/core/services/api.service";

@Injectable({ providedIn: 'root' })
export class PlayerNameResolver implements Resolve<string> {

  constructor( private apiService: ApiService ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> {
    const id = route.paramMap.get('id');
    if (!!id) {
      return this.apiService.getPlayer(+id).pipe(
        map(res => `${res.first_name} ${res.last_name}`)
      );
    }
    return of('');
  }
}