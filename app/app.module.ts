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

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import {
    HomeContainer,
    LoginFormModule,
    UserProfileModule,
    RegisterComponent,
    MapComponent,
    AlertComponent,
    NewsComponent,
    NewsDetailsComponent,
    NewsPostComponent,
    CommentComponent,
    CommentPostComponent,
    ChargeAccountComponent,
    FooterComponent,
    ModalQRCodeComponent
} from './components/index';

import {
    TicketPricesComponent,
    TicketListComponent,
    TicketDetailComponent,
    ActivateTicketComponent,
    BuyTicketComponent
} from './tickets/index';

import { ImageDataPipe, SortPipe, YesNoPipe } from './pipes/';
import { TicketPriceDirective, CardNumberDirective, HighlightDirective } from './directives/';

import { AuthService, ApiService, AlertService, NewsService, CommentService } from './services/index';

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
        NewsPostComponent,
        BuyTicketComponent,
        CommentComponent,
        CommentPostComponent,
        ChargeAccountComponent,
        ModalQRCodeComponent,
        TicketPricesComponent,
        TicketListComponent,
        TicketDetailComponent,
        ActivateTicketComponent,
        FooterComponent,

        SortPipe,
        ImageDataPipe,
        YesNoPipe,

        TicketPriceDirective,
        CardNumberDirective,
        HighlightDirective,
    ],

    providers: [
        AuthGuard,
        AuthService,
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
