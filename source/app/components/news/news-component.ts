import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { NewsService } from '../../services/news-service';
import { News } from '../../models/news';

@Component({
  selector: 'news-component',
  templateUrl: './news-component.html',
  providers: [NewsService]
})


export class NewsComponent implements OnInit {

  news: News[];
  error: any;

  constructor(private http: Http, private router: Router, private newsService: NewsService) { }

  ngOnInit(){
      this.newsService
        .getAll()
        .subscribe(p => this.news = p)
    }
}