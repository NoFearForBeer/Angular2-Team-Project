import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CookieService } from '../node_modules/angular2-cookie/services/cookies.service';

import { HomeContainer } from './components/containers/home/home-container';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginFormModule } from './components/index';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { AlertComponent } from './components/alert/alert-component';

import { AuthService, UserService, ApiService, AlertService } from './services/index';

import { BuyTicketModule } from './tickets';

import { AuthGuard } from './guards/auth-guard';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        BuyTicketModule,
        LoginFormModule
    ],

    declarations: [
        AppComponent,
        AlertComponent,
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
