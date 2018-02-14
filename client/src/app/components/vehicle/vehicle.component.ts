import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  testfunct() {
    let arr = [2, 3, 23, 34, 1, 4, 5, 4];

    //arr.forEach(i => console.log(i +3));

    arr.map(val => val * 3)
       .filter(val => val % 2 === 0)
       .forEach(val => console.log(val));

  }

}