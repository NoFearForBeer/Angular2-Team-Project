import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, Comment } from '../models/index';

@Injectable()
export class NewsService {

    private baseUrl: string = 'http://ticket-system-rest.apphb.com/';

    private applicationJson: string = 'application/json';
    private jsonHeaders: Headers = new Headers({
        'Content-type': this.applicationJson,
        'Accept': this.applicationJson
    });

    constructor(private http: Http) { }

    getAll(): Observable<News[]> {
        let news$ = this.http
            .get(`${this.baseUrl}news`, { headers: this.getHeaders() })
            .map(mapNews);
        return news$;
    }

    getNews(id: number): Observable<News> {
        let n$ = this.http
            .get(`${this.baseUrl}news/${id}`, { headers: this.getHeaders() })
            .map(mapSingleNews);
        return n$;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    post(news: any): Observable<any> {
        const path = `${this.baseUrl}news/post`;
        return this.http.post(path, news, { headers: this.jsonHeaders })
            .map((resp: Response) => {
                console.log('Success!!');
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

    delete(id: number): Observable<any> {
        const path = `${this.baseUrl}news/delete/${id}`;
        return this.http.post(path, { headers: this.jsonHeaders })
            .map((resp: Response) => {
                console.log('Success!!');
                return Observable.empty;
            })
            .catch((error: Response) => {
                let errorMessages: String[] = [];
                console.log(error);
                return Observable.throw(errorMessages.toString());
            });
    }
}

function mapNews(response: Response): News[] {
    return response.json().map(toNews);
}

function mapSingleNews(response: Response): News {
    return toNews(response.json());
}

function toNews(r: any): News {
    let n = <News>({
        id: r.Id,
        title: r.Title,
        content: r.Content,
        createdOn: r.CreatedOn,
        comments: r.Comments
    });
    return n;
}
