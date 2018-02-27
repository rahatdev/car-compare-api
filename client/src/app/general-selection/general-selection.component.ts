import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-selection',
  templateUrl: './general-selection.component.html',
  styleUrls: ['./general-selection.component.scss']
})
export class GeneralSelectionComponent implements OnInit {
  result: String;
  zipcode: Number; //onUpdate
  annualMileage: Number;
  percentCity: Number;
  percentHighway: Number;

  constructor() { }

  ngOnInit() {
    this.result = "Here are your results!";
  }

  onUpdateClick() {
    console.log("zipcode:", this.zipcode)
    console.log("miles:", this.annualMileage)
  }

}
