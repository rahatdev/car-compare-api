import { TestBed, inject } from '@angular/core/testing';

import { ListingService } from './listing.service';

describe('ListingService', () => {
  let service: ListingService;
  beforeAll(() => {
    service = new ListingService();
  })
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingService]
    });
  });

  it('should be created', inject([ListingService], (service: ListingService) => {
    expect(service).toBeTruthy();
  }));

  it('should get listings from craigslist', () => {
    const result = service.getCraigslistListings();
    //fake?

    expect(result.length).toBeGreaterThan(0);
  })

});
