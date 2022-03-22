import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from "../environments/environment";
import { CarlistComponent } from './components/carlist/carlist.component';
import { CarComponent } from './components/car/car.component';




@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    CarComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
