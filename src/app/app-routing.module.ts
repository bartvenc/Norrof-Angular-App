import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PokemonListComponent } from './components/PokemonList/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/PokemonList/pokemon-list-item/pokemon-list-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { PokemonMovesComponent } from './components/pokemon-moves/pokemon-moves.component';


const routes: Routes = [
  {
    path:'pokemon/:id',
    component: PokemonDetailComponent
  },
  {
    path:'',
    component:PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
