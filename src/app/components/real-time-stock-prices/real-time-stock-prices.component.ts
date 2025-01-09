import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { environment } from '../../services/environment';

interface StockPrice {
  symbol: string;
  open: number;
  high: number;
  low: number;
  price: number;
  timestamp: string;
}

@Component({
  selector: 'app-real-time-stock-prices',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './real-time-stock-prices.component.html',
  styleUrl: './real-time-stock-prices.component.scss'
})
export class RealTimeStockPricesComponent implements OnInit {
  stockPrices: StockPrice[] = [];
  loading = false;
  private apiKey = environment.alphaVantageApiKey; // Replace with your API key
  symbols = ['AAPL', 'NVDA', 'MSFT', 'AMZN', 'TSLA', 'META', 'GOOGL', 'AVGO', 'GOOG', 'LLY', 'WMT', 'JPM', 'BRK.B', 'V', 'MA', 'UNH', 'ORCL', 'XOM', 'COST', 'PG']; // Add your desired stock symbols

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStockPrices();
    setInterval(() => this.fetchStockPrices(), 30000); // Update every 30 seconds
  }

  fetchStockPrices(): void {
    this.loading = true;

    // Create an array of observables for each stock symbol
    const requests: Observable<StockPrice>[] = this.symbols.map((symbol) =>
      this.http
        .get<any>(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiKey}`
        )
        .pipe(
          map((response) => {
            const data = response['Global Quote'];
            return {
              symbol: data['01. symbol'],
              open: parseFloat(data['02. open']),
              high: parseFloat(data['03. high']),
              low: parseFloat(data['04. low']),
              price: parseFloat(data['05. price']),
              timestamp: new Date().toLocaleString(),
            } as StockPrice;
          })
        )
    );

    // Use forkJoin to execute all API requests in parallel
    forkJoin(requests).subscribe({
      next: (results) => {
        this.stockPrices = results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching stock prices:', err);
        this.loading = false;
      },
    });
  }
}
