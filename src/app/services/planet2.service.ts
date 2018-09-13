import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Planet2Service {
  planets$: Observable<any[]>;
  newPlanet: Planet = {} as Planet;

  constructor(db: AngularFirestore) {
    this.planets$ = db.collection("planets").valueChanges();
   }
}
