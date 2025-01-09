import { Component, OnInit } from '@angular/core';
import { AlphaVantageService } from '../../services/alpha-vantage.service';
import { NgFor } from '@angular/common';

export interface NewsArticle {
  title: string;
  summary: string;
  url: string;
  banner_image: string;
  overall_sentiment_label:string;
}


@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss'],
  standalone:true,
  imports: [NgFor],
})
export class NewsSliderComponent implements OnInit {
  newsArticles: NewsArticle[] = [];

  constructor(private alphaVantageService: AlphaVantageService) {}

  ngOnInit(): void {
    this.fetchTopNews();
  }

  fetchTopNews() {
    this.alphaVantageService.getNewsArticles().subscribe(data => {
      let feeds = data.feed.filter((feed:NewsArticle) => feed.overall_sentiment_label == 'Bullish');
      this.newsArticles = feeds; 
    }, error => {
      console.error('Error fetching news:', error);
    });
  }
}
