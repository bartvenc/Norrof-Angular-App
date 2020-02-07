import { Component } from "@angular/core";
import { PokemonFetchService } from "./services/pokemon-fetch.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "PokeLib";
  pokemonList: any[] = [];
  constructor(private pokemonFetchService: PokemonFetchService) {}
  ngOnInit() {}
}
