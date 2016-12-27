import { Component, Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { AuthService } from '../../services/auth-service';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';
import { News } from '../../models/news';
import { User } from '../../models/user';
import { NewsDetailsComponent } from '../news/news-details-component';

@Component({
  selector: 'comment-post-component',
  templateUrl: './comment-post-component.html',
  providers: [CommentService]
})


@Injectable()
export class CommentPostComponent {
    model: any = {};

    @Input()
    currentNews: News;
    currentUser: User;

    constructor(private commentService: CommentService, private authService: AuthService ) { }

    postComment() {
        //let currentUser = this.authService.getLoggedUser();
        let newsId = this.currentNews.id;

        //console.log(currentUser);
        //this.model['AuthorId'] = "9f3fa438-4aa5-491b-9f10-8865d7d0038f";
        this.model['NewsItemId'] = newsId;
        console.log(this.model);
        this.commentService.post(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                console.log("success");
            },
            error => {
                console.log(error);
            });
    }
}