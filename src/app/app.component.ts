import { Component } from '@angular/core';
import { PlanetService } from './planet.service'
import { faStar, faBookmark, faGlobeAsia, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planet-test';
  faPlus = faPlus;
  faArrowRight = faArrowRight;
  faGlobeAsia = faGlobeAsia;
  faBookmark = faBookmark;
  faStar = faStar;
  name1 = [];
  data = []
  constructor(private planet: PlanetService) {
    this.planet.getData().subscribe((data: PlanetService[]) => {

      // if(data){}
      this.data = data
    })
  }
  favorites(name) {
    this.name1.push(name);
    console.log("Added");
  }
}
