import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { AuthService } from '../../services/auth-service';
import { NewsService } from '../../services/news-service';
import { AlertService } from '../../services/alert-service';

import { flyInOut } from '../../animations/flyInOut-animation';

import { News } from '../../models/news';

@Component({
  selector: 'news-component',
  templateUrl: './news-component.html',
  providers: [NewsService],
  animations: [flyInOut()]
})


export class NewsComponent implements OnInit {

    news: News[];
    error: any;

    constructor(
        private http: Http,
        private router: Router,
        private newsService: NewsService,
        private authService: AuthService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.newsService
            .getAll()
            .subscribe(p => this.news = p)
    }

    deleteNews(id: number) {
        this.newsService.delete(id)
            .subscribe(
            data => {
                location.reload();
                this.alertService.success("News deleted succesfully!");
            },
            error => {
                this.alertService.error("This news cannot be deleted");
            });
    }

    addNews(model: News) {
        this.news.push(model);
    }

    checkIfAdmin(): boolean {
        return this.authService.isInRole("admin");
    }
}