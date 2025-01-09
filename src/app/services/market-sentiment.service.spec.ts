import { TestBed } from '@angular/core/testing';

import { MarketSentimentService } from './market-sentiment.service';

describe('MarketSentimentService', () => {
  let service: MarketSentimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketSentimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
