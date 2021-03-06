import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, Comment } from '../models/index';
import { NewsService } from './news-service';

@Injectable()
export class CommentService {

    private baseUrl: string = 'http://localhost:3200/api/';

    private applicationJson: string = 'application/json';
    private jsonHeaders: Headers = new Headers({
        'Content-type': this.applicationJson,
        'Accept': this.applicationJson
    });

    constructor(private http: Http) { }

    getByNewsID(id: number): Observable<Comment[]> {
        let c$ = this.http
            .get(`${this.baseUrl}comments/bynews/${id}`, { headers: this.getHeaders() })
            .map(mapComments);
        return c$;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    post(comment: any): Observable<any> {
        const path = `${this.baseUrl}comments/post`;
        return this.http.post(path, comment, { headers: this.jsonHeaders })
            .map((resp: Response) => {
                // There are no response from register.
                return Observable.empty;
            })
            .catch((error: Response) => {
                let errorMessages: String[] = [];
                let modelState = error.json().ModelState;
                Object.getOwnPropertyNames(modelState).forEach((prop) => {
                    errorMessages.push(modelState[prop].toString());
                });
                return Observable.throw(errorMessages.toString());
            });
    }

    delete(id: number): Observable<any> {
        const path = `${this.baseUrl}comments/delete/${id}`;
        return this.http.post(path, { headers: this.jsonHeaders })
            .map((resp: Response) => {
                return Observable.empty;
            })
            .catch((error: Response) => {
                let errorMessages: String[] = [];
                return Observable.throw(errorMessages.toString());
            });
    }
}

function mapComments(response: Response): Comment[] {
    return response.json().map(toComment);
}

function toComment(r: any): Comment {
    let comment = <Comment>({
        id: r.Id,
        content: r.Content,
        createdOn: r.CreatedOn,
        author: r.Author
    });
    return comment;
}
