// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class StockDataService {
//   private apiKey = 'BPCYYEMYPBOWB8P6';
//   private baseUrl = 'https://www.alphavantage.co/query'
//   constructor(private http:HttpClient) {}

//   getStockData(symbol:string): Observable<any> {
//     const url = `${this.baseUrl}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
//     return this.http.get<any>(url, {responseType:'json'});
//   }

//   //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo  
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
import axios from 'axios';
import { EarningsData } from '../components/earnings-calendar/earnings-data';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiKey = environment.alphaVantageApiKey; 
  private baseUrl = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) {}


  getRealTimePrice(symbol: string): Observable<any> {
    const url = `http://127.0.0.1:8000/api/stocks/real-time/${symbol}/`;
    return this.http.get(url);
  }
  
  getHistoricalData(symbol: string): Observable<any> {
    const url = `http://127.0.0.1:8000/api/stocks/historical/${symbol}/`;
    return this.http.get(url);
  }

  // Fetch CSV from Alpha Vantage
  async fetchEarningsCalendar(): Promise<object[]> {
    const functionName = 'EARNINGS_CALENDAR'; // API function for earnings calendar
    const apiUrl = `${this.baseUrl}?function=${functionName}&apikey=${this.apiKey}&datatype=csv`;

    try {
      // Fetch CSV data
      const response = await axios.get(apiUrl, { responseType: 'text' });
      const csvData = response.data;

      // Convert CSV to JSON
      return this.csvToJson(csvData);
    } catch (error) {
      console.error('Error fetching earnings calendar:', error);
      throw error;
    }
  }

 // Utility to convert CSV to JSON
 private csvToJson(csv: string): object[] {
  const lines = csv.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
  const headers = lines[0].split(',').map(header => header.trim()); // Extract headers

  return lines.slice(1).map(line => {
    const values = line.split(',').map(value => value.trim()); // Extract values
    const obj: { [key: string]: string } = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || ''; // Map headers to values
    });
    return obj;
  });
}  
}
