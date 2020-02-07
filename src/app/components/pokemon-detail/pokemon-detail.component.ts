import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonFetchService } from "../../services/pokemon-fetch.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  param: any;
  pokeAllDetail: any[] = [];
  picS: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private pokemonFetchService: PokemonFetchService
  ) {
    this.param = this.route.snapshot.params.id;
    this.pokemonFetchService.getPokeProfileDetail(this.param).subscribe(res => {
      this.pokeAllDetail = res.body;
      //console.log(this.pokeAllDetail.moves);
    });
  }
 /*   filterPics() {
    for (let key of Object.values(this.pokeAllDetail.sprites)) {
      if (key != null) {
        this.picS.push(key);
      }
    }
  }*/

  ngOnInit() {
    //this.filterPics();
  }
}
