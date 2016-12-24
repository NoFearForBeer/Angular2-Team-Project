import { NgModule } from '@angular/core';
import { LoginForm } from './login-form-component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    providers: [AuthService],
    declarations: [LoginForm],
    exports: [LoginForm]
})
export class LoginFormModule { }
