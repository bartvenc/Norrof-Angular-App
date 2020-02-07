import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pokemon-profile",
  templateUrl: "./pokemon-profile.component.html",
  styleUrls: ["./pokemon-profile.component.scss"]
})
export class PokemonProfileComponent implements OnInit {
  @Input() abilities: any[] = [];
  @Input() height: number;
  @Input() weight: number;
  @Input() baseExperience : number;
  @Input() pic: string;
  @Input() name: string;
  constructor() {}

  ngOnInit() {
    console.log('This is in pokemon profile component - where we are rendering the image');
    console.log(this.pic);
  }
}
