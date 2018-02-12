import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: String;
  zipcode: Number;
  annualMilage: Number;
  percentCity: Number;
  percentHighway: Number;

  constructor(
    //private _vehicleData: VehicleDataService
  ) { }

  ngOnInit() {
  }

}
