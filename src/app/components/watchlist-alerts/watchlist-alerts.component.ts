import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface WatchlistItem {
  id?: number;
  symbol: string;
  alert_type: string;
}


@Component({
  selector: 'app-watchlist-alerts',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './watchlist-alerts.component.html',
  styleUrl: './watchlist-alerts.component.scss'
})
export class WatchlistAlertsComponent {
  watchlist: WatchlistItem[] = [];
  newStock: WatchlistItem = { symbol: '', alert_type: 'price' };

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.loadWatchlist();
  }

  loadWatchlist(): void {
    this.watchlistService.getWatchlist().subscribe((data) => {
      this.watchlist = data;
    });
  }

  addStock(): void {
    this.watchlistService.addWatchlistItem(this.newStock).subscribe((item) => {
      this.watchlist.push(item);
      this.newStock = { symbol: '', alert_type: 'price' };
    });
  }

  removeStock(id?: number): void {
    if (id) {
      this.watchlistService.deleteWatchlistItem(id).subscribe(() => {
        this.watchlist = this.watchlist.filter((item) => item.id !== id);
      });
    }
  }
}
