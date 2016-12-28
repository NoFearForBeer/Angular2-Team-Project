// import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpModule, Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';

@Injectable()
export class AuthService {

    currentLoggedUser = {
        access_token: '',
        expires_in: '',
        token_type: '',
        userName: '',
    };

    private cookieKey = 'authKey';
    private baseApiUrl: string = 'http://localhost:3200/api/';
    private baseUrl: string = 'http://localhost:3200/';
    private applicationJson: string = 'application/json';

    private jsonHeaders: Headers = new Headers({
        'Content-type': this.applicationJson,
        'Accept': this.applicationJson
    });

    private formHeaders: Headers = new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
    });

    constructor(
        private http: Http,
        private cookieService: CookieService,
        // private route: ActivatedRoute,
        // private router: Router,
    ) { }

    getAuthorizationHeader(): Headers {
        let token = this.cookieService.get(this.cookieKey);
        console.log(token);
        return new Headers({
            'Content-type': this.applicationJson,
            'Authorization': `Bearer ${token}`
        });
    }

    isLoggedIn(): boolean {
        return !!this.cookieService.get(this.cookieKey);
    }

    getLoggedUser(): any {
        return this.currentLoggedUser;
    }

    logout(): void {
        console.log('logout');
        this.cookieService.remove(this.cookieKey);
        this.currentLoggedUser.access_token = '';
        this.currentLoggedUser.expires_in = '';
        this.currentLoggedUser.token_type = '';
        this.currentLoggedUser.userName = '';
    }

    register(user: any): Observable<any>  {
        const path = `${this.baseApiUrl}account/register`;
        return this.http.post(path, user, { headers: this.jsonHeaders })
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

    login(userName: string, password: string): Observable<Response> {
        let path = `${this.baseUrl}token`;
        let data = `grant_type=password&password=${password}&userName=${userName}`;

        return this.http.post(path, data, { headers: this.formHeaders })
            .map((resp: Response) => {
                let jsonData = resp.json();
                let expires: Date = new Date(jsonData['.expires']);
                this.currentLoggedUser = jsonData;
                console.log(this.currentLoggedUser);
                this.cookieService.put(this.cookieKey, jsonData.access_token, { expires : expires } );
                // this.router.navigate(['/']);
                return resp;
            })
            .catch((error: Response | any) => {
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }

                return Observable.throw(errMsg);
            });
    }
}