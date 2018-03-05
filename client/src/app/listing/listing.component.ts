import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  craigslistListings: any[]; //should be vehicle

  constructor(private _listingService: ListingService) { }

  ngOnInit() {
    this.craigslistListings = this._listingService.getCraigslistListings();
  }

}
