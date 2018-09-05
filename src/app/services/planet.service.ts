import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
 planets: Planet [] = [
    { name: 'Jupiter', description: 'A big and stormy planet'},
    { name: 'Venus', description: 'Cold and barren full of gas'}
];

  constructor() { }

  getPlanets(): Planet [] {
    return this.planets;
  }

  addPlanet(planet: Planet) {
    if(planet.name && planet.description) {
      this.planets.push(planet);
    }
  }

  removePlanet(planet: Planet) {
    const index: number = this.planets.indexOf(planet);
    this.planets.splice(index,1);
  }
}
