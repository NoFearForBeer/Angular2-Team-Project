import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { News } from '../models/news';
import { Comment } from '../models/comment';
import { NewsService } from './news-service';
 
@Injectable()
export class CommentService {

    private baseUrl: string = 'http://ticket-system-rest.apphb.com/api/';

    private applicationJson: string = 'application/json';
    private jsonHeaders: Headers = new Headers({
        'Content-type': this.applicationJson,
        'Accept': this.applicationJson
    });

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

     post(comment: any): Observable<any>  {
        const path = `${this.baseUrl}comments/post`;
        return this.http.post(path, comment, { headers: this.jsonHeaders })
                .map((resp: Response) => {
                    console.log('Success!!');
                    // There are no response from register.
                    return Observable.empty;
                })
                .catch((error: Response) => {

                   let errorMessages: String[] = [];
                   console.log(error);
                   let modelState = error.json().ModelState;
                   Object.getOwnPropertyNames(modelState).forEach((prop) => {
                        errorMessages.push(modelState[prop].toString());
                   });
                   return Observable.throw(errorMessages.toString());
                });
    }

    delete(id: number): Observable<any>  {
        const path = `${this.baseUrl}comments/delete/${id}`;
        return this.http.post(path, { headers: this.jsonHeaders })
                .map((resp: Response) => {
                    console.log('Success!!');
                    // There are no response from register.
                    return Observable.empty;
                })
                .catch((error: Response) => {
                   let errorMessages: String[] = [];
                   console.log(error);
                   return Observable.throw(errorMessages.toString());
                });
    }
}

function mapComments(response:Response): Comment[]{
    console.log(response.json());
    return response.json().map(toComment)
}

function toComment(r:any): Comment{
    let comment = <Comment>({
        id: r.Id,
        content: r.Content,
        createdOn: r.CreatedOn,
        author: r.Author
    });
    console.log('Parsed comments:', comment);
    return comment;
}
