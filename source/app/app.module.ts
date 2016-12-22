import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginForm } from './components/ui/loginForm-component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services//auth-service';
import { ApiService } from './services//api-service';
import { HomeContainer } from './components/containers/home/home-contianer';
import { HttpModule } from '@angular/http';
import { CookieService  } from '../node_modules/angular2-cookie/services/cookies.service';

 
import { AlertComponent } from './components/alert-component';
import { AlertService } from './services//alert-service';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeContainer,
        LoginForm,
    ],
    providers: [
        AuthService,
        ApiService,
        CookieService,
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }


