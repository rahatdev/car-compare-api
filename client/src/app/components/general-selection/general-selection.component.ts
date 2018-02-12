import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-selection',
  templateUrl: './general-selection.component.html',
  styleUrls: ['./general-selection.component.scss']
})
export class GeneralSelectionComponent implements OnInit {
  result: String;
  zipcode: Number;
  annualMilage: Number;
  percentCity: Number;
  percentHighway: Number;
  
  constructor() { }

  ngOnInit() {
  }

}
