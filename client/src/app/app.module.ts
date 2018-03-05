import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GeneralSelectionComponent } from './general-selection/general-selection.component';
import { StarComponent } from './shared/star.component';

import { ListingService } from './listing/listing.service';
import { ConvertToTitleCasePipe } from './shared/title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    VehicleComponent,
    GeneralSelectionComponent,
    StarComponent,
    ConvertToTitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
