import { Injectable } from '@angular/core';

@Injectable()
export class ListingService {

  constructor() { }

  getCraigslistListings(){
    return [{
      make: 'Ferrari',
      model: '458'
    }, {
      make: 'Toyota',
      model: 'Supra'
    }]
  }


}
