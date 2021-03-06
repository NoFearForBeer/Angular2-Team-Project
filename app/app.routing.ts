import { Routes, RouterModule } from '@angular/router';

// TODO: Should be imported from one file
import { HomeContainer } from './components/containers/home/home-container';
import { LoginForm } from './components/login/login-form-component';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { NewsComponent } from './components/news/news-component';
import { NewsDetailsComponent } from './components/news/news-details-component';
import { UserProfileComponent } from './components/index';
import { TicketPricesComponent } from './tickets/ticket-prices/ticket-prices-component';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket-component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list-component';
import { ChargeAccountComponent } from './components/charge/charge-account-component';
import { AuthGuard } from './guards/auth-guard';

const appRoutes: Routes = [
    { path: '', component: MapComponent, },
    { path: 'login', component: LoginForm, },
    { path: 'register', component: RegisterComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailsComponent },
    { path: 'prices', component: TicketPricesComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'tickets/buy', component: BuyTicketComponent, canActivate: [AuthGuard] },
    { path: 'charge', component: ChargeAccountComponent, canActivate: [AuthGuard] },
    { path: 'tickets', component: TicketListComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
