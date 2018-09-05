import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { FormsModule } from '@angular/forms';
import { PlanetIntroComponent } from './components/planet-intro/planet-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetIntroComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
