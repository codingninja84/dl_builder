import { TestBed, inject } from '@angular/core/testing';

import { NewSlideService } from './new-slide.service';

describe('NewSlideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewSlideService]
    });
  });

  it('should be created', inject([NewSlideService], (service: NewSlideService) => {
    expect(service).toBeTruthy();
  }));
});
