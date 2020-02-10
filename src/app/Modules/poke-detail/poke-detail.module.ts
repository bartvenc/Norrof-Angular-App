import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PokeDetailModule { 

    id: number; 
    name: string; 
    base_experience: number; 
    height: number; 
    is_default: boolean; 
    order: number; 
    weight: number; 
    abilities: [];
    forms: [];
    game_indices: [];
    held_items: [];
    location_area_encounters: [];
    moves: [];
    species: {}; 
    sprites: {}; 
    stats: [];
    types: [];
}