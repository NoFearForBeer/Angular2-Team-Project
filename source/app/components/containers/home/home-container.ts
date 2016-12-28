import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { ApiService } from '../../../services/api-service';
import { Response } from '@angular/http';
import { User } from '../../../models/user';

@Component({
    selector: 'home-container',
    templateUrl: './home-container.html',
    providers: [AuthService]
})
export class HomeContainer implements OnInit{
    currentUserUsername: string;
    //userName: String = '<UserName>';
    result: string = 'Test';

    constructor(private authService: AuthService, private apiService: ApiService) { }

    ngOnInit() {
       this.getCurrentUser();
    }

    getCurrentUser(): void {
        this.currentUserUsername = this.authService.currentLoggedUser.userName;
        console.log("User:"+this.authService.currentLoggedUser.userName);
    }
    // TODO: Delete
    checkAuthorization(): void {
        this.apiService.get('/Values')
            .subscribe(json => this.result = json, err => this.result = err);
    }

    // TODO: Delete
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
