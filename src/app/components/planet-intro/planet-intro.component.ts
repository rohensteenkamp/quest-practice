import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';

import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-planet-intro',
  templateUrl: './planet-intro.component.html',
  styleUrls: ['./planet-intro.component.css']
})
export class PlanetIntroComponent implements OnInit {
  planets: Planet[];
  newPlanet: Planet = {} as Planet;

  constructor(private planetService: PlanetService) { }

  addPlanet(): void {
    this.planetService.addPlanet(this.newPlanet);
  }

  ngOnInit() {
    this.planets = this.planetService.getPlanets();
  }

}
