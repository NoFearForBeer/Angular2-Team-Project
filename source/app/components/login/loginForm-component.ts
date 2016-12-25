import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
//import { AlertService } from '../services/alert-service';
// import { AuthService } from '../services/authService';

@Component({
    selector: 'login-component',
    templateUrl: './loginForm-component.html'
})

export class LoginForm {
    @Output() authorizeUser = new EventEmitter();

    user = {
        username: '',
        password: '',
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        //private alertService: AlertService
    ) { }

    loginUser(): void {
        if (!this.user.username || !this.user.password) {
            console.log('Username or password cannot be empty');
            return;
        }

        const { username, password }  = this.user;
        this.authorizeUser.next({ username, password});

        this.user.username = '';
        this.user.password = '';
    }
}

