import { Component, OnInit, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pokemon-stats",
  templateUrl: "./pokemon-stats.component.html",
  styleUrls: ["./pokemon-stats.component.scss"]
})
export class PokemonStatsComponent implements OnInit {
  @Input() stats: any[] = [];
  @Input() name: string;
  @Input() types: any[] = [];
  @Input() pic: any[] = [];
  @Input() species: any;
  picS: string[] = [];

  thePic: string = "";
  picIndex = 0;
  interval;
  timeLeft: number = 1;

  constructor() {
    
  }
  ngOnInit() {
    this.filterPics();
    this.changePic();
  }

  filterPics() {
    for (let key of Object.values(this.pic)) {
      if (key != null) {
        this.picS.push(key);
      }
    }
  }

  changePic() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        //console.log(this.pic);
        this.timeLeft--;
      } else {
        console.log("changing time");
        if (this.picIndex > 2) {
          this.picIndex = 0;
        } else {
          this.picIndex++;
          console.log("index " + this.picIndex);
        }
        this.timeLeft = 1;
      }
    }, 1000);
  }
}
