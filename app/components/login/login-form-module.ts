import { NgModule } from '@angular/core';
import { LoginForm } from './login-form-component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [LoginForm],
    exports: [LoginForm]
})
export class LoginFormModule { }
