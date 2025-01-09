// import { Component, OnInit } from '@angular/core';
// import { StockService } from '../../../services/stock-data.service';
// import { NgIf, NgFor } from '@angular/common';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   imports:[NgFor],
//   standalone: true,
// })
// export class DashboardComponent implements OnInit {
//   stockPrice: string = '';
//   stockSymbol: string = 'AAPL'; // Example stock symbol
//   loading: boolean = true;
//   historicalChart: any;

//   constructor(private stockService: StockService) {}

//   ngOnInit() {
//     this.fetchRealTimePrice(this.stockSymbol);
//     this.loadHistoricalData(this.stockSymbol);
//   }

//   fetchRealTimePrice(symbol: string) {
//     this.loading = true;
//     this.stockService.getRealTimePrice(symbol).subscribe({
//       next: (data: any) => {
//         if (data['Global Quote']) {
//           this.stockPrice = data['Global Quote']['05. price'];
//         } else {
//           console.error('No data available for symbol:', symbol);
//         }
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching real-time price:', err);
//         this.loading = false;
//       },
//     });

//   }

//   loadHistoricalData(symbol: string) {
//     this.stockService.getHistoricalData(symbol).subscribe({
//       next: (data: any) => {
//         if (data['Time Series (Daily)']) {
//           const timeSeries = data['Time Series (Daily)'];
//           const dates = Object.keys(timeSeries).slice(0, 10).reverse(); // Last 10 days
//           const prices = dates.map((date) => parseFloat(timeSeries[date]['4. close']));

//           this.initializeChart(dates, prices);
//         } else {
//           console.error('No historical data available for symbol:', symbol);
//         }
//       },
//       error: (err) => {
//         console.error('Error fetching historical data:', err);
//       },
//     });
//   }

//   initializeChart(dates: string[], prices: number[]) {
//     this.historicalChart = new Chart('historicalChart', {
//       type: 'line',
//       data: {
//         labels: dates,
//         datasets: [
//           {
//             label: 'Closing Price',
//             data: prices,
//             borderColor: '#556ee6',
//             backgroundColor: 'rgba(85, 110, 230, 0.2)',
//             fill: true,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: { beginAtZero: true },
//           y: { beginAtZero: false },
//         },
//       },
//     });

//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   imports:[CommonModule],
//   standalone: true,
// })
// export class DashboardComponent implements OnInit {
//   // Example data
//   stocks = [
//     { name: 'AAPL', price: 175.30 },
//     { name: 'GOOGL', price: 2820.00 },
//     { name: 'AMZN', price: 3400.50 }
//   ];

//   portfolio = {
//     totalValue: 100000,
//     profitLoss: 1200,
//     performance: 75 // percentage
//   };

//   earningsCalendar = [
//     { stock: 'AAPL', date: new Date('2024-12-15') },
//     { stock: 'TSLA', date: new Date('2024-12-18') },
//     { stock: 'MSFT', date: new Date('2024-12-20') }
//   ];

//   marketSentiment = {
//     score: 0.75 // example sentiment score
//   };

//   watchlist = [
//     { name: 'NFLX', price: 640.25 },
//     { name: 'META', price: 310.00 },
//     { name: 'NVDA', price: 512.60 }
//   ];

//   alerts = [
//     { message: 'AAPL has crossed $175', time: new Date() },
//     { message: 'TSLA is up 5% today', time: new Date() },
//     { message: 'MSFT earnings call tomorrow', time: new Date() }
//   ];

//   constructor() {}

//   ngOnInit(): void {
//     // Load real-time data here if necessary
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { NgxPaginationModule } from 'ngx-pagination';
import { StockService } from '../../../services/stock-data.service';
import { EarningsCalendarComponent } from '@/app/components/earnings-calendar/earnings-calendar.component';
import { Chart } from 'chart.js';
import { environment } from '@/app/services/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    EarningsCalendarComponent,
  ],
})
export class DashboardComponent implements OnInit {
  stocks: any[] = [];
  earningsCalendar: any[] = [];
  marketNews: { title: string; url: string }[] = [];
  watchlist: { symbol: string; price: number }[] = [];
  exchangeRates: { name: string; rate: number }[] = [];
  page = 1;
  historicalChart: any;
  apiKey = environment.alphaVantageApiKey;
  loading: boolean = true;
  stockPrice: any;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    //this.loadStockPrices();
    this.loadBulkStockPrices();
    this.loadEarningsCalendar();
    this.loadMarketNews();
    this.loadWatchlist();
    this.loadExchangeRates();
    this.loadHistoricalData('AAPL');
  }




  async loadStockPrices() {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol: 'AAPL',
          interval: '1min',
          apikey: this.apiKey,
        },
      });

      const timeSeries = response.data['Time Series (1min)'];
      if (timeSeries) {
        this.stocks = Object.entries(timeSeries).map(([time, data]: any) => ({
          time,
          open: data['1. open'],
          high: data['2. high'],
          low: data['3. low'],
          close: data['4. close'],
        }));
      }
    } catch (error) {
      console.error('Error fetching stock prices:', error);
    }
  }

  async loadEarningsCalendar() {
    this.earningsCalendar = [
      { stock: 'AAPL', date: new Date('2024-12-15') },
      { stock: 'TSLA', date: new Date('2024-12-18') },
    ];
  }


  async loadBulkStockPrices() {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: 'REALTIME_BULK_QUOTES',
          symbol: 'AAPL, NVDA, MSFT, AMZN, TSLA, META, GOOGL, AVGO, GOOG, LLY,WMT, JPM, BRK.B, ',
          apikey: this.apiKey,
        },
      });

      const bulkStocks = response.data['data'];
      if (bulkStocks) {
        this.stocks = Object.entries(bulkStocks).map(([symbol, data]: any) => ({
          symbol: data['symbol'],
          open: data['open'],
          high: data['high'],
          low: data['low'],
          close: data['close'],
        }));
      }
    } catch (error) {
      console.error('Error fetching stock prices:', error);
    }
  }  

  async loadMarketNews() {
    // Dummy data for market news; replace with actual API if available
    this.marketNews = [
      { title: 'Tech Stocks Rally Amid Earnings Reports', url: '#' },
      { title: 'Federal Reserve Announces New Interest Rates', url: '#' },
    ];
  }

  async loadWatchlist() {

    try {
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: 'REALTIME_BULK_QUOTES',
          symbol: 'MSFT,AAPL,IBM,GOOGL,AMZN,',
          apikey: this.apiKey,
        },
      });

      const bulkStocks = response.data['data'];
      let tempStocks = [];
      if (bulkStocks) {
        this.watchlist = Object.entries(bulkStocks).map(([symbol, data]: any) => ({
          symbol: data['symbol'],
          price: data['close'],
        }));
      }
    } catch (error) {
      console.error('Error fetching stock prices:', error);
    }





    // Dummy watchlist data; replace with actual API if available
    // this.watchlist = [
    //   { symbol: 'AAPL', price: 150 },
    //   { symbol: 'TSLA', price: 250 },
    // ];
  }

  async loadExchangeRates() {
    // Dummy exchange rate data; replace with actual API if available
    this.exchangeRates = [
      { name: 'USD/EUR', rate: 0.92 },
      { name: 'USD/JPY', rate: 110.25 },
    ];
  }


  fetchRealTimePrice(symbol: string) {
    this.loading = true;
    this.stockService.getRealTimePrice(symbol).subscribe({
      next: (data: any) => {
        if (data['Global Quote']) {
          this.stockPrice = data['Global Quote']['05. price'];
        } else {
          console.error('No data available for symbol:', symbol);
        }
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching real-time price:', err);
        this.loading = false;
      },
    });

  }

  
  loadHistoricalData(symbol: string) {
    this.stockService.getHistoricalData(symbol).subscribe({
      next: (data: any) => {
        if (data['Time Series (Daily)']) {
          const timeSeries = data['Time Series (Daily)'];
          const dates = Object.keys(timeSeries).slice(0, 10).reverse(); // Last 10 days
          const prices = dates.map((date) => parseFloat(timeSeries[date]['4. close']));

          this.initializeChart(dates, prices);
        } else {
          console.error('No historical data available for symbol:', symbol);
        }
      },
      error: (err) => {
        console.error('Error fetching historical data:', err);
      },
    });
  }

  initializeChart(dates: string[], prices: number[]) {
    this.historicalChart = new Chart('historicalChart', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Closing Price',
            data: prices,
            borderColor: '#556ee6',
            backgroundColor: 'rgba(85, 110, 230, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: false },
        },
      },
    });





}
}