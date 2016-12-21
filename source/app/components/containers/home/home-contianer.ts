import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { ApiService } from '../../../services/api-service';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Component({
    selector: 'home-container',
    templateUrl: './home-contianer.html'
})

export class HomeContainer {

    result: string = 'Test';

    constructor(private authService: AuthService, private apiService: ApiService) { }

    checkAuthorization(): void {
        this.apiService.get('/Values')
            .subscribe(json => this.result = json, err => this.result = err);
    }

    getToken(user: any): void {
        let { username, password } = user;
        console.log(user);
        this.authService.login(username, password).subscribe(
            (response: Response) => {
               // console.log(response.json());
            },
             (error: any) => {
                 console.log(error);
            }
        );
    }

    logout() {
        this.authService.logout();
    }
}
