import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '@/app/services/news-feed.service';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent implements OnInit {
  apiKey:string = 'BPCYYEMYPBOWB8P6';
  apiUrl:string = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=' + this.apiKey;
  feeds:any[] = [];


  constructor(private newsService: NewsFeedService) {}

  ngOnInit(): void {
    this.newsService.getNewsAndSentiments().subscribe({
      next: (data) => (this.feeds = data),
      error: (err) => console.error("Error fetching news:", err),
    });
  }
}
