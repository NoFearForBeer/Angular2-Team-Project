import { Component, OnInit, Input, Injectable, Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { CommentService } from '../../services/comment-service';
import { AuthService } from '../../services/auth-service';
import { ApiService } from '../../services/api-service';
import { AlertService } from '../../services/alert-service';

import { Comment } from '../../models/comment';
import { News } from '../../models/news';
import { User } from '../../models/user';

import { NewsDetailsComponent } from '../news/news-details-component';
import { SortPipe } from '../../pipes';

@Component({
  selector: 'comment-component',
  templateUrl: './comment-component.html',
  providers: [CommentService, SortPipe]
})

@Injectable()
export class CommentComponent implements OnInit {
    userName: string = '<UserName>';
    model: any = {};
    comments: Comment[] = [];

    @Output() commentDeleted = new EventEmitter();

    @Input()
    currentNews: News;
    currentUser: User;

  constructor(
    private http: Http, 
    private router: Router, 
    private commentService: CommentService, 
    private route: ActivatedRoute,
    private authService: AuthService,
    private api: ApiService,
    private alertService: AlertService,
    private sort: SortPipe ) { }

  ngOnInit(): void {
    let newsId = this.currentNews.id;
    console.log(newsId);
    this.commentService.getByNewsID(newsId)
      .subscribe(c => this.comments = c)

    if (this.authService.isLoggedIn()) {
        this.userName = this.authService.getLoggedUser().userName;
    }
  }

  deleteComment(id: number) {
    this.comments.slice();
    this.commentService.delete(id)
        .subscribe(
        data => {
            
            this.commentDeleted.emit(id);
            this.alertService.success("Comment deleted succesfully!");
        },
        error => {
            this.alertService.error("This comment cannot be deleted");
        });
    }
}