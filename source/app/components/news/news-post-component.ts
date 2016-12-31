import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { AlertService } from '../../services/alert-service';
import { AuthService } from '../../services/auth-service';
import { NewsService } from '../../services/news-service';

import { News } from '../../models/news';
import { User } from '../../models/user';

@Component({
  selector: 'news-post-component',
  templateUrl: './news-post-component.html',
  providers: [NewsService, AuthService]
})


@Injectable()
export class NewsPostComponent implements OnInit{
    userName: string = '<UserName>';
    model: any = {};

    @Input()
    currentUser: User;

    constructor(
        private newsService: NewsService, 
        private authService: AuthService,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit() {
        
    }

    postNews() {
        this.newsService.post(this.model)
            .subscribe(
            data => {
                location.reload();
                this.alertService.success("News posted succesfully!");
            },
            error => {
                this.alertService.error("An error occured!");
            });
    }
}