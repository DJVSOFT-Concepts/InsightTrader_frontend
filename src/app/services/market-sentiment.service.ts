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
    const url = `${environment.sentimentUrl}`;
    return this.http.get(url);
  }
}
