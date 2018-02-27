import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './/listing/listing.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GeneralSelectionComponent } from './general-selection/general-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    VehicleComponent,
    GeneralSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
