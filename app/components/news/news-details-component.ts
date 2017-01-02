import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { NewsService, AuthService } from '../../services/';
import { News } from '../../models/news';
import { Comment } from '../../models/comment';

import { SortPipe } from '../../pipes';

import { CommentComponent } from '../comments/comment-component';


@Component({
  selector: 'news-details-component',
  templateUrl: 'news-details-component.html',
  providers: [SortPipe]
})
export class NewsDetailsComponent implements OnInit {
  news: News;
  error: any;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.newsService.getNews(id)
          .subscribe(n => this.news = n);
      }
    });
  }

  addComment(comment: Comment, commentComoennt: CommentComponent) {
    commentComoennt.ngOnInit();
  }

  removeComment(id: number, commentComoennt: CommentComponent) {
    commentComoennt.ngOnInit();
  }
}
