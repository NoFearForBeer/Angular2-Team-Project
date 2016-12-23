import { Component, Output, EventEmitter } from '@angular/core';
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

