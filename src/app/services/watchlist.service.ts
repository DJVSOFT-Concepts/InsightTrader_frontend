import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface WatchlistItem {
  id?: number;
  symbol: string;
  alert_type: string;
}


@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private apiUrl = 'http://localhost:8000/api/stocks/watchlist/';

  constructor(private http: HttpClient) {}

  getWatchlist(): Observable<WatchlistItem[]> {
    return this.http.get<WatchlistItem[]>(this.apiUrl);
  }

  addWatchlistItem(item: WatchlistItem): Observable<WatchlistItem> {

    const headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post<WatchlistItem>(this.apiUrl, item, { headers }).pipe(
      catchError((error) => {
        console.error('Error adding watchlist item:', error);
        // Customize the error response if needed
        return throwError(() => new Error('Failed to add watchlist item. Please try again.'));
      })
    );
  }
  deleteWatchlistItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
