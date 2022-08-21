import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerResolver } from './_resolve/player.resolve';

const routes: Routes = [
  {
    path: '',
    component: PlayersListComponent,
  },
  {
    path: ':id',
    component: PlayerComponent,
    resolve: {
        player: PlayerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersListRoutingModule { }
