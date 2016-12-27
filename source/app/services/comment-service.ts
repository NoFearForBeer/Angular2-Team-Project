import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { News } from '../models/news';
import { Comment } from '../models/comment';
import { NewsService } from './news-service';
 
@Injectable()
export class CommentService {

    private baseUrl: string = 'http://localhost:3200/api/';

    constructor(private http: Http) { }

    getByNewsID(id: number): Observable<Comment[]>{
        let c$ = this.http
        .get(`${this.baseUrl}comments/bynews/${id}`, {headers: this.getHeaders()})
        .map(mapComments);
        return c$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapComments(response:Response): Comment[]{
    return response.json().map(toComment)
}

function toComment(r:any): Comment{
    let comment = <Comment>({
        id: r.Id,
        content: r.Content,
        createdOn: r.CreatedOn,
        author: r.Author.UserName
    });
    console.log('Parsed comments:', comment);
    return comment;
}
