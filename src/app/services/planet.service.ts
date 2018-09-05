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

  // addPlanet() {

  // }
}
