import { Component, OnInit } from '@angular/core';
import { Planet2Service } from '../../services/planet2.service';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planet2',
  templateUrl: './planet2.component.html',
  styleUrls: ['./planet2.component.css']
})
export class Planet2Component implements OnInit {
  planets: Planet[];
  newPlanet: Planet = {} as Planet;

  constructor(private planet2Service: Planet2Service) { }

  ngOnInit() {
    this.planet2Service.planets$.subscribe(value => this.planets = value)
  }

  addPlanet(): void {
    this.planet2Service.addPlanet(this.newPlanet);
    this.newPlanet = {} as Planet;
  }
}
