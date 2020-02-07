import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";



@Component({
  selector: "app-pokemon-list-item",
  templateUrl: "./pokemon-list-item.component.html",
  styleUrls: ["./pokemon-list-item.component.scss"]
})
export class PokemonListItemComponent implements OnInit {
  @Input() poke: any;

  constructor(private router: Router) {}

  ngOnInit() {}
}
