import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list/players-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlayersListRoutingModule } from './players-list-routing.module';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    PlayersListComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersListRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PlayersListModule { }
