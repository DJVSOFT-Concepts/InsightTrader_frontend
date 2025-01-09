import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageService {
  private apiKey = environment.alphaVantageApiKey;

  constructor(private http: HttpClient) {}

  getMarketOverview(): Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${this.apiKey}`);
  }

  
  getTopGainers(): Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${this.apiKey}`);
  }

  getTopLosers(): Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${this.apiKey}`);
  }

  getNewsArticles(): Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${this.apiKey}`);
  }

  getMarketSentiment(): Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${this.apiKey}`);
  }
}
