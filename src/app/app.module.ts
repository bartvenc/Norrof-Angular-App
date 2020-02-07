import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/PokemonList/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/PokemonList/pokemon-list-item/pokemon-list-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { PokemonMovesComponent } from './components/pokemon-moves/pokemon-moves.component';

import { ReplacePipe } from './replace-pipe';
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokemonDetailComponent,
    PokemonProfileComponent,
    PokemonStatsComponent,
    PokemonMovesComponent,
    ReplacePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
