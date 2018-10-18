import { TestBed, inject } from '@angular/core/testing';

import { CountryHttpService } from './country-http.service';

describe('CountryHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryHttpService]
    });
  });

  it('should be created', inject([CountryHttpService], (service: CountryHttpService) => {
    expect(service).toBeTruthy();
  }));
});
