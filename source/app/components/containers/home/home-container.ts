import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { ApiService } from '../../../services/api-service';
import { Router } from '@angular/router';

@Component({
    selector: 'home-container',
    templateUrl: './home-container.html'
})
export class HomeContainer {
    userName: string = '<UserName>';

    constructor(private authService: AuthService,
                private apiService: ApiService,
                private router: Router) { }

    ngOnInit() {
        // TODO: known bug this should be updated on login !
       this.userName = this.authService.getLoggedUser().userName;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
