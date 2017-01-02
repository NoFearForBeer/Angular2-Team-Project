import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { AuthService, NewsService, AlertService } from '../../services/index';

import { SortPipe } from '../../pipes/index';

import { flyInOut } from '../../animations/flyInOut-animation';

import { News } from '../../models/news';

@Component({
  selector: 'news-component',
  templateUrl: './news-component.html',
  providers: [NewsService, SortPipe],
  animations: [flyInOut()]
})


export class NewsComponent implements OnInit {

    news: News[] = [];
    error: any;

    constructor(
        private http: Http,
        private router: Router,
        private newsService: NewsService,
        private authService: AuthService,
        private alertService: AlertService,
        private sort: SortPipe
    ) { }

    ngOnInit() {
        this.newsService
            .getAll()
            .subscribe(p => this.news = p);
    }

    deleteNews(id: number) {
        this.newsService.delete(id)
            .subscribe(
            data => {
                let arrayIndex = this.news.findIndex(newsItem => newsItem.id === id);
                if (arrayIndex >= 0) {
                    this.news.splice(arrayIndex, 1);
                }

                this.alertService.success('News deleted succesfully!');
            },
            error => {
                this.alertService.error('This news cannot be deleted');
            });
    }

    addNews(model: News) {
        this.news.push(model);
    }

    checkIfAdmin(): boolean {
        return this.authService.isInRole('admin');
    }
}
