import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonFetchService } from "../../services/pokemon-fetch.service";
import { Poke } from "../../Modules/poke.model"

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  param: any;
  pokeAllDetail: Poke[] = [];
  picS: string[] = [];

  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private pokemonFetchService: PokemonFetchService
  ) {
    this.param = this.route.snapshot.params.id;
    this.pokemonFetchService.getPokeProfileDetail(this.param).subscribe(res => {
      this.pokeAllDetail = res.body; 
      this.loading = false;
      //console.log(this.pokeAllDetail.moves);
    });
  }
  ngOnInit() {
  
  }
}
