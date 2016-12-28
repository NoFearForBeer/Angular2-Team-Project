import { Routes, RouterModule } from '@angular/router';

// TODO: Should be imported from one file
import { HomeContainer } from './components/containers/home/home-container';
import { LoginForm } from './components/login/login-form-component';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { NewsComponent } from './components/news/news-component';
import { NewsDetailsComponent } from './components/news/news-details-component';
import { UserProfileComponent } from './components/index';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket-component';

const appRoutes: Routes = [
    { path: '', component: MapComponent },
    { path: 'login', component: LoginForm },
    { path: 'register', component: RegisterComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailsComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'tickets/buy', component: BuyTicketComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
