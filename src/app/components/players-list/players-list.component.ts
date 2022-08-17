import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public dataSource: any;
  public displayedColumns = ['no', 'firstName', 'lastName', 'position', 'teamFullName'];

  constructor(public apiService: ApiService) { }

  public ngOnInit(): void {
    this.apiService.getPlayers(0).subscribe(res => this.dataSource = res.data);
  }

}
