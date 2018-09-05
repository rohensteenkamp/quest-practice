import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PlanetIntroComponent } from './components/planet-intro/planet-intro.component';

const routes:  Routes = [
  { path: '', component: PlanetIntroComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
