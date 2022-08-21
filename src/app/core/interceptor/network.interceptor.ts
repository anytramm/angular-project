import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, catchError, throwError, of } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(
    private loadingService: LoadingService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.show();
    return next.handle(request).pipe(
      catchError(() => {
        this._snackBar.open('Error');
        return of();
      }),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
