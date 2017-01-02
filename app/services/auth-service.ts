import { Injectable } from '@angular/core';
import { HttpModule, Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';

@Injectable()
export class AuthService {

    private cookieKey = 'authKey';
    private baseApiUrl: string = 'http://ticket-system-rest.apphb.com/api/';
    private baseUrl: string = 'http://ticket-system-rest.apphb.com/';
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
    ) { }

    getAuthorizationHeader(): Headers {

        let token: string = JSON.parse(this.cookieService.get(this.cookieKey))['access_token'];
        return new Headers({
            'Content-type': this.applicationJson,
            'Authorization': `Bearer ${token}`
        });
    }

    isLoggedIn(): boolean {
        return !!this.cookieService.get(this.cookieKey);
    }

    getLoggedUser(): any {
        if (this.isLoggedIn()) {
            let value: string = this.cookieService.get(this.cookieKey);
            return JSON.parse(value);
        }

        return null;
    }

    logout(): void {
        this.cookieService.remove(this.cookieKey);
    }

    isInRole(role: string): boolean {
        if (!this.isLoggedIn()) {
            return  false;
        }

        let value: string = this.cookieService.get(this.cookieKey);
        let currentUser: any = JSON.parse(value);
        let result = currentUser.Roles.toLowerCase().indexOf(role.toLowerCase()) >= 0;
        return  result;
    }

    register(user: any): Observable<any> {
        const path = `${this.baseApiUrl}account/register`;
        return this.http.post(path, user, { headers: this.jsonHeaders })
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

    login(userName: string, password: string): Observable<Response> {
        let path = `${this.baseUrl}token`;
        let data = `grant_type=password&password=${password}&userName=${userName}`;

        return this.http.post(path, data, { headers: this.formHeaders })
            .map((resp: Response) => {
                let jsonData = resp.json();
                let expires: Date = new Date(jsonData['.expires']);
                let value: string = JSON.stringify(jsonData);

                this.cookieService.put(this.cookieKey, value, { expires: expires });
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
