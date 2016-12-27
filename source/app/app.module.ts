import { NgModule, Pipe, PipeTransform} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CookieService } from '../node_modules/angular2-cookie/services/cookies.service';

import { HomeContainer } from './components/containers/home/home-container';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginFormModule, UserProfileModule } from './components/index';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { AlertComponent } from './components/alert/alert-component';
import { NewsComponent } from './components/news/news-component';
import { NewsDetailsComponent } from './components/news/news-details-component';

import {ValuesPipe} from './pipes/values-pipe';

import { AuthService, UserService, ApiService, AlertService, NewsService } from './services/index';

import { BuyTicketModule } from './tickets';

import { AuthGuard } from './guards/auth-guard';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        BuyTicketModule,
        LoginFormModule,
        UserProfileModule
    ],

    declarations: [
        AppComponent,
        AlertComponent,
        RegisterComponent,
        HomeContainer,
        MapComponent,
        NewsComponent,
        NewsDetailsComponent,
        ValuesPipe
    ], // to be refactored to modules

    providers: [
        AuthGuard,
        AuthService,
        UserService,
        ApiService,
        CookieService,
        AlertService,
        NewsService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
