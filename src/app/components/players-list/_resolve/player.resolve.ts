import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Player } from "src/app/core/models";
import { ApiService } from "src/app/core/services/api.service";

@Injectable({ providedIn: 'root' })
export class PlayerResolver implements Resolve<Player|undefined> {

  constructor( private apiService: ApiService ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Player|undefined> {
    const id = route.paramMap.get('id');
    if (!!id) {
      return this.apiService.getPlayer(+id);
    }
    return of(undefined);
  }
}