import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService } from '../../services/';

@Component({
    selector: 'register-component',
    templateUrl: '/register-component.html'
})

@Injectable()
export class RegisterComponent {
    model: any = {};
    loading: boolean = false;

    constructor(
        private router: Router,
        private auth: AuthService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.model['ConfirmPassword'] = this.model.password;
        this.auth.register(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
                this.loading = false;
            },
            error => {
                this.loading = false;
                this.alertService.error(error);
                console.log(error);
            });
    }
}
