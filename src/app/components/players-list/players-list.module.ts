import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PlayersListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PlayersListModule { }
