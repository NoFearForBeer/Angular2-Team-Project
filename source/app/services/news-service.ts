import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { News } from '../models/news';
 
@Injectable()
export class NewsService {

    private baseUrl: string = 'http://localhost:3200/api/';

    constructor(private http: Http) { }

    getAll(): Observable<News[]>{
        let news$ = this.http
        .get(`${this.baseUrl}/news`, {headers: this.getHeaders()})
        .map(mapNews);
        return news$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapNews(response:Response): News[]{
    return response.json().map(toNews)
}

function toNews(r:any): News{
    let n = <News>({
        title: r.Title,
        content: r.Content,
        createdOn: r.CreatedOn,
    });
    console.log('Parsed news:', n);
    return n;
}

