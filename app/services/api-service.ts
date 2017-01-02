import { Injectable } from '@angular/core';
import { HttpModule, Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth-service';

@Injectable()
export class ApiService {
    private baseApiUrl: string = 'http://ticket-system-rest.apphb.com/api';

    constructor(private http: Http, private authService: AuthService) { }

    get(path: string): Observable<any> {
        path = `${this.baseApiUrl}${path}`;

        return this.http.get(path, { headers: this.authService.getAuthorizationHeader() })
            .catch(err => Observable.throw(err))
            .map(resp => {
                if (!!resp._body) {
                    return resp.json();
                }

                return resp.statusText;
            });
    }

    post(path: string, data: Object): Observable<any> {
        path = `${this.baseApiUrl}${path}`;

        return this.http.post(path, JSON.stringify(data), { headers: this.authService.getAuthorizationHeader() })
            .catch(err => Observable.throw(err))
            .map(resp => {
                if (!!resp._body) {
                    return resp.json();
                }

                return resp.statusText;
            });
    }

    put(path: string, data: Object): Observable<any> {

        let headers = this.authService.getAuthorizationHeader();

        path = `${this.baseApiUrl}${path}`;

        return this.http.put(path, JSON.stringify(data), { headers })
            .catch(err => Observable.throw(err))
            .map(resp => {
                if (!!resp._body) {
                    return resp.json();
                }

                return resp.statusText;
            });
    }

    delete(path: string) {
        path = `${this.baseApiUrl}${path}`;

        return this.http.delete(path, { headers: this.authService.getAuthorizationHeader() })
            .catch(err => Observable.throw(err))
            .map(resp => {
                if (!!resp._body) {
                    return resp.json();
                }

                return resp.statusText;
            });
    }

    uploadFile(path: string, file: File): Promise<any> {
        return new Promise((resolve, reject) => {
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve('sucess');
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            path = `${this.baseApiUrl}${path}`;
            xhr.open('PUT', path, true);

            let headers = this.authService.getAuthorizationHeader();
            let token: string = headers.get('Authorization');
            xhr.setRequestHeader('Authorization', token);

            let formData = new FormData();
            formData.append('file', file, file.name);
            xhr.send(formData);
        });
    }
}
