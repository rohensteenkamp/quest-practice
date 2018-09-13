import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Planet2Component } from './components/planet2/planet2.component';

@NgModule({
  declarations: [
    AppComponent,
    Planet2Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
