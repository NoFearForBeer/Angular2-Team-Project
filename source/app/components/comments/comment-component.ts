import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';
import { News } from '../../models/news';
import { NewsDetailsComponent } from '../news/news-details-component';

@Component({
  selector: 'comment-component',
  templateUrl: './comment-component.html',
  providers: [CommentService]
})


export class CommentComponent implements OnInit {
  comments: Comment[];
  @Input()
  currentNews: News;

  constructor(private http: Http, private router: Router, private commentService: CommentService, route: ActivatedRoute) { }

  ngOnInit(): void {
    let newsId = this.currentNews.id;
    console.log(newsId);
    this.commentService.getByNewsID(newsId)
      .subscribe(c => this.comments = c)
  }
}