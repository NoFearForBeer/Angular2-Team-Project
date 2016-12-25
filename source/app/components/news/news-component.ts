import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news-service';
import { News } from '../../models/news';

import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'news-component',
  templateUrl: './news-component.html',
  providers: [NewsService]
})

export class NewsComponent implements OnInit {
  
  errorMessage: string;
  news: News[];

  constructor(private http: Http, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll();
  }

   getAll(): any {
     this.newsService.getAll()
                     .subscribe(
                       news => this.news = news,
                       error =>  this.errorMessage = <any>error);
                            console.log(this.news)
  }
}