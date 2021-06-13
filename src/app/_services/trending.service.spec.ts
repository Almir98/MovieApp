/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrendingService } from './trending.service';

describe('Service: Trending', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendingService]
    });
  });

  it('should ...', inject([TrendingService], (service: TrendingService) => {
    expect(service).toBeTruthy();
  }));
});
