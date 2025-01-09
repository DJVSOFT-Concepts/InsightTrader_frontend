import { NewsFeedService } from '@/app/services/news-feed.service';
import { Component, OnInit } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs';
import { NgIf,NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule, NgIf, NgFor],
  templateUrl: 'feed.component.html',
  //template: ``,
  styles: ``,
})
export class FeedComponent implements OnInit {
  apiKey:string = 'BPCYYEMYPBOWB8P6';
  apiUrl:string = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=' + this.apiKey;
  feeds:any;


  constructor(private newsService: NewsFeedService) {}

  ngOnInit(): void {
    this.newsService.getNewsAndSentiments().subscribe({
      next: (data) => {
        this.feeds = data;
      } ,
      error: (err) => {
        console.error("Error fetching news:", err);
      } ,
    });
  }
}
