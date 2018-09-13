import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Planet2Component } from './components/planet2/planet2.component';

const routes: Routes = [
  { path: '', component: Planet2Component }
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
