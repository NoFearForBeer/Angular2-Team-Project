import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs';

import { CommentService } from '../../services/news-service';
import { Comment } from '../../models/news';

@Component({
  selector: 'comment-component',
  templateUrl: './comment-component.html',
  providers: [CommentService]
})


export class CommentComponent implements OnInit {

  conments: Comment[];
  error: any;

  constructor(private http: Http, private router: Router, private commentService: CommentService) { }

ngOnInit(){
    this.commentService
      .getAll()
      .subscribe(p => this.news = p)
  }
}