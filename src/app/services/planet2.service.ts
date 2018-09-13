import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Planet2Service {
  planets$: Observable<any[]>;
  planetCollection: AngularFirestoreCollection<Planet>;

  constructor(db: AngularFirestore) {
    this.planetCollection = db.collection<Planet>("planets");
    this.planets$ = db.collection("planets").valueChanges();
   }
   
  getPlanets() {
    return null;
  }

  addPlanet(planet: Planet) {
    this.planetCollection.add(planet);
  }

}
