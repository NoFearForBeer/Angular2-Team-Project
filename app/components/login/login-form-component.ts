import { Component, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/index';
import { Response } from '@angular/http';

import { AlertService } from '../../services/alert-service';

@Injectable()
@Component({
    selector: 'login-component',
    templateUrl: './login-form-component.html'
})
export class LoginForm {
    user = {
        username: '',
        password: '',
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private auth: AuthService,
        private alertService: AlertService
    ) { }

    loginUser(): void {
        if (!this.user.username || !this.user.password) {
            console.log('Username or password cannot be empty');
            return;
        }

        const { username, password } = this.user;
        this.auth.login(username, password).subscribe(
            (resp: Response) => {
                this.user.username = '';
                this.user.password = '';
                this.router.navigate(['/']);
                this.alertService.success('User logged in successfully!');
            }, (err: Error) => {
                console.error(err);
                this.alertService.error('User not recognized!');
            });
    }
}
