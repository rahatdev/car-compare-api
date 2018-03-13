import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NgReduxModule, NgRedux} from 'ng2-redux';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GeneralSelectionComponent } from './general-selection/general-selection.component';
import { StarComponent } from './shared/star.component';

import { ListingService } from './listing/listing.service';
import { ConvertToTitleCasePipe } from './shared/title-case.pipe';
import { VehicleDataService } from './core/services/vehicle-data.service';
import { VehicleActions } from './vehicle/vehicle.actions';
import { GeneralSelectionActions } from './general-selection/general-selection.actions';


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
    HttpClientModule,
    NgReduxModule
  ],
  providers: [
    ListingService,
    VehicleDataService
   // VehicleActions,
   // GeneralSelectionActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
