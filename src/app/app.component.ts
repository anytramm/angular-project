import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading$: Observable<boolean> = this.loadingService.loading$;

  constructor(public loadingService: LoadingService) {}

  public ngOnInit(): void {
  }

}
