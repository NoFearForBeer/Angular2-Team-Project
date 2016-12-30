import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { HttpModule } from '@angular/http';
import { CookieService } from '../node_modules/angular2-cookie/services/cookies.service';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { HomeContainer } from './components/containers/home/home-container';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginFormModule, UserProfileModule } from './components/index';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { AlertComponent } from './components/alert/alert-component';
import { NewsComponent } from './components/news/news-component';
import { NewsDetailsComponent } from './components/news/news-details-component';
import { CommentComponent } from './components/comments/comment-component';
import { CommentPostComponent } from './components/comments/comment-post-component';
import { ChargeAccountComponent } from './components/charge/charge-account-component';
import { ModalQRCodeCompoennt } from './components/modal/modal-component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list-component';

import { ValuesPipe, ImageDataPipe, SortPipe, YesNoPipe } from './pipes/';
import { TicketPriceDirective, CardNumberDirective } from './directives/';

import { AuthService, UserService, ApiService, AlertService, NewsService, CommentService } from './services/index';

import { BuyTicketComponent } from './tickets';

import { AuthGuard } from './guards/auth-guard';

@NgModule({
    imports: [
        BrowserModule,
        DropdownModule.forRoot(),
        ModalModule.forRoot(),
        BootstrapModalModule,
        routing,
        FormsModule,
        HttpModule,
        LoginFormModule,
        UserProfileModule,
        Ng2BootstrapModule
    ],

    declarations: [
        AppComponent,
        AlertComponent,
        RegisterComponent,
        HomeContainer,
        MapComponent,
        NewsComponent,
        NewsDetailsComponent,
        BuyTicketComponent,
        CommentComponent,
        CommentPostComponent,
        ChargeAccountComponent,
        ValuesPipe,
        SortPipe,
        ImageDataPipe,
        YesNoPipe,
        TicketPriceDirective,
        CardNumberDirective,
        ModalQRCodeCompoennt,
        TicketListComponent
    ],

    providers: [
        AuthGuard,
        AuthService,
        UserService,
        ApiService,
        CookieService,
        AlertService,
        NewsService,
        CommentService,
        ImageDataPipe,
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
