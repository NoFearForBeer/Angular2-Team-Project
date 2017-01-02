import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth-service';
import { ApiService } from '../../../services/api-service';

@Component({
    selector: 'home-container',
    templateUrl: './home-container.html',
    providers: [AuthService],
})
export class HomeContainer implements OnInit {
    userName: string = '<UserName>';

    constructor(private authService: AuthService,
                private apiService: ApiService,
                private router: Router) { }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.userName = this.authService.getLoggedUser().userName;
        }
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
