import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit {
  @Input() pokeMoves: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
