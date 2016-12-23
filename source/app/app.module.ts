import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginForm } from './components/login/loginForm-component';
import { RegisterComponent } from './components/register/register-component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services//auth-service';
import { UserService } from './services//user-service';
import { ApiService } from './services//api-service';
import { HomeContainer } from './components/containers/home/home-container';
import { HttpModule } from '@angular/http';
import { CookieService  } from '../node_modules/angular2-cookie/services/cookies.service';
import { BuyTicketModule } from './tickets';
 
import { AlertComponent } from './components/alert/alert-component';
import { AlertService } from './services//alert-service';
 
@NgModule({
    imports: [
        BrowserModule, 
        routing,
        FormsModule, 
        HttpModule, 
        BuyTicketModule
    ],

    declarations: [
        AppComponent, 
        AlertComponent, 
        LoginForm, 
        RegisterComponent,
        HomeContainer
    ], // to be refactored to modules
    
    providers: [
        AuthService, 
        UserService,
        ApiService, 
        CookieService,
        AlertService
    ],
    
    bootstrap: [AppComponent]
})
 
export class AppModule { }


