import { TestBed } from '@angular/core/testing';

import { ImagesearchService } from './imagesearch.service';

describe('ImagesearchService', () => {
  let service: ImagesearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
