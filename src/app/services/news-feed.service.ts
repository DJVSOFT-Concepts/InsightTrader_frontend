import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private apiKey = 'BPCYYEMYPBOWB8P6';
  private baseUrl = 'https://www.alphavantage.co/query'
  constructor(private http:HttpClient) {}

  getNewsAndSentiments(): Observable<any> {
    const url = `${this.baseUrl}?function=NEWS_SENTIMENT&apikey=${this.apiKey}`;
    return this.http.get<any>(url, {responseType:'json'});
  }
}
