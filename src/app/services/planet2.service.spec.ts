import { TestBed, inject } from '@angular/core/testing';

import { Planet2Service } from './planet2.service';

describe('Planet2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Planet2Service]
    });
  });

  it('should be created', inject([Planet2Service], (service: Planet2Service) => {
    expect(service).toBeTruthy();
  }));
});
