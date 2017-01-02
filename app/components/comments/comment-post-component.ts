import { Component, Injectable, Input, OnInit, NgZone as zone, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs';

import { AlertService, AuthService, CommentService } from '../../services/';
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
export class CommentPostComponent {
    userName: string = '<UserName>';
    model: any = {};

    @Output() commnentPosted = new EventEmitter();

    @Input()
    currentNews: News;
    currentUser: User;

    constructor(
        private commentService: CommentService,
        private authService: AuthService,
        private router: Router,
        private alertService: AlertService,
        private zone: zone ) { }

    postComment(form: NgForm ) {
        let newsId = this.currentNews.id;

        this.model['AuthorUsername'] = this.authService.getLoggedUser().userName;
        console.log(this.authService.getLoggedUser().userName);
        this.model['NewsItemId'] = newsId;
        this.commentService.post(this.model)
            .subscribe(
            data => {
                form.resetForm();
                let emitModel: News = data;
                this.commnentPosted.emit(emitModel);
                this.alertService.success('Comment posted succesfully!');
            },
            error => {
                this.alertService.error('An error occured!');
            });
    }
}
