import { Component, OnInit, Output, HostListener } from "@angular/core";
//import { PokemonListItem } from '../pokemon-list-item'
import { HttpClientModule } from "@angular/common/http";
import { PokemonFetchService } from "../../../services/pokemon-fetch.service";
import { Pokemon } from "../../../Modules/pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonFetchService: PokemonFetchService) {}

  pokemonList: any[] = [];
  pokemonRealList: Pokemon[] = [];
  // @Output() name:string;

  ngOnInit() {

    this.pokemonFetchService.getAllPokes().subscribe(res => {
      this.pokemonList = [...res.body.results];

      this.pokemonList.forEach(element => {
        this.pokemonFetchService.getSinglePoke(element.url).subscribe(res => {
          this.pokemonRealList.push({
            name: res.body.name,
            picUrl: res.body.sprites.front_default
          });
        });
      });
    });
    
  }

  loadPokes() {
    //  this.pokemonFetchService.getAllPokes().subscribe(res => {
    
    this.pokemonFetchService.getAllPokes(this.pokemonFetchService.nextPage).subscribe(res => {
      this.pokemonList = [...res.body.results];

      this.pokemonList.forEach(element => {
        this.pokemonFetchService.getSinglePoke(element.url).subscribe(res => {
          this.pokemonRealList.push({
            name: res.body.name,
            picUrl: res.body.sprites.front_default
          });
        });
      });
    });
  }
  loadMore() {
    //alert("buttons works");
    this.loadPokes();
  }
  @HostListener("scroll", ["$event"])
  onScroll(event: any) {
    console.log(event.target.offsetHeight)
    // visible height + pixel scrolled >= total height
    if (
      event.target.offsetHeight + event.target.scrollTop + 1 >=
      event.target.scrollHeight
    ) {
      console.log("End");
    }
  }

 
  /*
  @HostListener("window:scroll", ["$event"])
  scrollHandler(event) {
    //In chrome and some browser scroll is given to body tag
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    console.log(pos/max)
    if ((pos/max)> 1.40) {
      //Do your action here
      console.log("bottom")
      //alert("bottom");
      this.loadMore();
    }
  }*/
}
