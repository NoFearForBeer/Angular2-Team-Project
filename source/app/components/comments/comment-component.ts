import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { CommentService } from '../../services/comment-service';
import { AuthService } from '../../services/auth-service';

import { Comment } from '../../models/comment';
import { News } from '../../models/news';
import { User } from '../../models/user';
import { NewsDetailsComponent } from '../news/news-details-component';

@Component({
  selector: 'comment-component',
  templateUrl: './comment-component.html',
  providers: [CommentService]
})

@Injectable()
export class CommentComponent implements OnInit {
    model: any = {};
    comments: Comment[];
    
    @Input()
    currentNews: News;
    currentUser: User;

  constructor(
    private http: Http, 
    private router: Router, 
    private commentService: CommentService, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    let newsId = this.currentNews.id;
    console.log(newsId);
    this.commentService.getByNewsID(newsId)
      .subscribe(c => this.comments = c)
  }

  deleteComment(id: number) {
        let currentUser = this.authService.getLoggedUser();
        //let newsId = this.currentNews.id;
        console.log(currentUser);

        this.commentService.delete(id)
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