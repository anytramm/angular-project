import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Player } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public pageSize: number = 25;
  public pageIndex: number = 5;
  public pageSizeOptions: number[] = [5, 10, 25];
  public length: number = 0;
  public dataSource: Array<Player> = [];
  public displayedColumns = ['no', 'firstName', 'lastName', 'position', 'teamFullName'];

  
  constructor(
    private apiService: ApiService, 
    private router: Router
  ) { }
    
  public ngOnInit(): void {
    this.showPreviewNextPage();
  }
    
  public showPreviewNextPage(event: PageEvent = {pageIndex: this.pageIndex, pageSize: this.pageSize} as PageEvent): void {
    this.apiService.getPlayers(event.pageIndex + 1, event.pageSize).subscribe(res => {
      this.dataSource = res.data
      this.length = res.meta.total_count;
      this.pageSize = res.meta.per_page;
      this.pageIndex = res.meta.current_page - 1;
    });
  }    
  
  public getRowNumber(index: number): number {
    return this.pageIndex * this.pageSize + index;
  }

  public showPlayer(id: number) {
    this.router.navigate(['players', id]);
  }
}
