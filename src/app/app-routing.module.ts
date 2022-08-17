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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
