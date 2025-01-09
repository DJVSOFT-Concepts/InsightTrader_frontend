import { Component, OnInit } from '@angular/core';
import { AlphaVantageService } from '../../services/alpha-vantage.service';
import { Chart } from 'chart.js';
import { NgFor } from '@angular/common';
import { NewsSliderComponent } from '../news-slider/news-slider.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone:true,
  imports:[NgFor, NewsSliderComponent, ServicesSectionComponent],
})
export class HomepageComponent implements OnInit {
  marketOverview: any[] = [];
  topGainers: any[] = [];
  topLosers: any[] = [];
  newsArticles: any[] = [];
  marketSentiment: string = 'Neutral';

  constructor(private alphaVantageService: AlphaVantageService) {}

  ngOnInit(): void {
    //this.fetchMarketOverview();
    this.fetchTopGainers();
    //this.fetchTopLosers();
    //this.fetchNewsArticles();
    this.fetchMarketSentiment();
    this.initializeCharts();
  }

  fetchMarketOverview() {
    this.alphaVantageService.getMarketOverview().subscribe(data => {
      this.marketOverview = data;
    });
  }

  fetchTopGainers() {
    this.alphaVantageService.getTopGainers().subscribe(data => {
      this.topGainers = data.top_gainers;
      this.topLosers = data.top_losers;
    });
  }

  fetchTopLosers() {
    this.alphaVantageService.getTopLosers().subscribe(data => {
      this.topLosers = data;
    });
  }

  fetchNewsArticles() {
    this.alphaVantageService.getNewsArticles().subscribe(data => {
      this.newsArticles = data;
    });
  }

  fetchMarketSentiment() {
    this.alphaVantageService.getMarketSentiment().subscribe(data => {
      this.marketSentiment = data.sentiment;
    });
  }

  initializeCharts() {
    new Chart('sectorPerformanceChart', {
      type: 'pie',
      data: {
        labels: ['Technology', 'Healthcare', 'Finance'],
        datasets: [
          {
            data: [45, 25, 30],
            backgroundColor: ['blue', 'green', 'red'],
          },
        ],
      },
    });
  }
}
