import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class MarketSentimentService {

  constructor(private http:HttpClient) {}

  // Fetch news sentiment
  getNewsSentiment(): Observable<any> {
    //const url = `${environment.sentimentUrl}`;
    const url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=UNRHD8QFWSD75Q5E';
    return this.http.get(url);
  }
}
