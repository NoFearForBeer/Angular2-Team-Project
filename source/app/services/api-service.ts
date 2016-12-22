import { Injectable } from '@angular/core';
import { HttpModule, Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service';

@Injectable()
export class ApiService {
    private baseApiUrl: string = 'http://localhost:3200/api';

    constructor(private http: Http, private authService: AuthService) {
    }

    get(path: string): Observable<any> {

        console.log(this.authService.getAuthorizationHeader());
        path = `${this.baseApiUrl}${path}`;
        return this.http.get(path, { headers: this.authService.getAuthorizationHeader() })
            .catch(err => Observable.throw(err))
            .map(resp => resp.json());
    }

    post(path: string, data: Object): Observable<any> {
        path = `${this.baseApiUrl}${path}`;
        return this.http.post(path, JSON.stringify(data), { headers: this.authService.getAuthorizationHeader() })
            .catch(err => Observable.throw(err))
            .map(resp => resp.json());
    }

    delete(path: string) {
        path = `${this.baseApiUrl}${path}`;
        return this.http.delete(path, { headers: this.authService.getAuthorizationHeader() })
            .catch(err => Observable.throw(err))
            .map(resp => resp.json());
    }
}