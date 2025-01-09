import { MarketSentimentService } from '@/app/services/market-sentiment.service';
import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

interface SentimentData {
  headline: string;          // News headline
  sentiment: 'Somewhat-bullish' | 'bullish' | 'neutral' | 'bearish' | 'Somewhat-bearish';  // Sentiment type
  impact: number;            // Stock price change (percentage)
  summary: string; // News summary
  imageUrl?: string; // Optional image URL
  dataUrl?: string;
}

@Component({
  selector: 'app-news-sentiment-analysis',
  standalone: true,
  imports: [
    CommonModule,
    NgIf, 
    NgFor
  ],
  templateUrl: './news-sentiment-analysis.component.html',
  styleUrl: './news-sentiment-analysis.component.scss'
})
export class MarketSentimentComponent implements OnInit {
  sentimentData: SentimentData[] = [];
  loading:boolean = false;

  constructor(private marketSentimentService: MarketSentimentService) {}

  ngOnInit(): void {
    this.fetchSentimentData();
  }

  // Dynamic badge color class based on sentiment
  getBadgeClass(sentiment: string): string {
    switch (sentiment) {
      case 'Somewhat-bullish':
        return 'bg-success text-white'; // Hyper's success badge
      case 'Somewhat-bearish':
        return 'bg-danger text-white';  // Hyper's danger badge
      case 'Bullish':
        return 'bg-success text-white'; // Hyper's success badge
      case 'Bearish':
        return 'bg-danger text-white';  // Hyper's danger badge
      case 'Neutral':
        return 'bg-warning text-white';  // Hyper's danger badge
      default:
        return 'bg-warning text-white'; // Hyper's neutral badge
    }
  }  

  fetchSentimentData(): void {
    this.loading = true;
    this.marketSentimentService.getNewsSentiment().subscribe({
      next: (data) => {
        this.sentimentData = data.feed.map((item: any) => ({
          headline: item.title,
          sentiment: item.overall_sentiment_label,
          impact: Math.round(item.overall_sentiment_score * 100) / 10, // Impact as a percentage
          summary: item.summary,
          imageUrl: item.banner_image,
          dataUrl: item.url,
        }));
        this.sentimentData = this.sentimentData.filter(sd => sd.headline !== 'Before you continue');
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching news sentiment:', err);
        this.loading = false;
      },
    });
  }
}
