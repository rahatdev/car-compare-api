import { TestBed, inject } from '@angular/core/testing';

import { NadaValueService } from './nada-value.service';

describe('NadaValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NadaValueService]
    });
  });

  it('should be created', inject([NadaValueService], (service: NadaValueService) => {
    expect(service).toBeTruthy();
  }));
});
