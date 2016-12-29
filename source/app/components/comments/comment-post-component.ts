import { Component, Injectable, Input, OnInit, NgZone as zone } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { AlertService } from '../../services/alert-service';
import { AuthService } from '../../services/auth-service';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';
import { News } from '../../models/news';
import { User } from '../../models/user';
import { NewsDetailsComponent } from '../news/news-details-component';

@Component({
  selector: 'comment-post-component',
  templateUrl: './comment-post-component.html',
  providers: [CommentService, AuthService]
})


@Injectable()
export class CommentPostComponent implements OnInit{
    userName: string = '<UserName>';
    model: any = {};

    @Input()
    currentNews: News;
    currentUser: User;

    constructor(
        private commentService: CommentService, 
        private authService: AuthService,
        private router: Router,
        private alertService: AlertService,
        private zone: zone ) { }

    ngOnInit() {
        
    }

    postComment() {
        let newsId = this.currentNews.id;

        this.model['AuthorUsername'] = this.authService.getLoggedUser().userName;
        console.log(this.authService.getLoggedUser().userName)
        this.model['NewsItemId'] = newsId;
        this.commentService.post(this.model)
            .subscribe(
            data => {
                location.reload();
                this.alertService.success("Comment posted succesfully!");
            },
            error => {
                this.alertService.error("An error occured!");
            });
    }
}