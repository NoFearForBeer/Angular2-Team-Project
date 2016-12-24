import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CookieService } from '../node_modules/angular2-cookie/services/cookies.service';

import { HomeContainer } from './components/containers/home/home-container';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginForm } from './components/login/loginForm-component';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { AlertComponent } from './components/alert/alert-component';

import { AuthService } from './services//auth-service';
import { UserService } from './services//user-service';
import { ApiService } from './services//api-service';
import { AlertService } from './services//alert-service';

import { BuyTicketModule } from './tickets';

import { AuthGuard } from './guards/auth-guard';
 
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
        HomeContainer,
        MapComponent
    ], // to be refactored to modules
    
    providers: [
        AuthGuard,
        AuthService, 
        UserService,
        ApiService, 
        CookieService,
        AlertService
    ],
    
    bootstrap: [AppComponent]
})
 
export class AppModule { }


