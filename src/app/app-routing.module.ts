import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full' 
  },
  {
    path: 'players',
    loadChildren: () => import('./components/players-list/players-list.module').then(m => m.PlayersListModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./components/teams/teams.module').then(m => m.TeamsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
