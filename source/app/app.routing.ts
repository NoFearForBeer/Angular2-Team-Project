import { Routes, RouterModule } from '@angular/router';

import { HomeContainer } from './components/containers/home/home-container';
import { LoginForm } from './components/login/login-form-component';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { NewsComponent } from './components/news/news-component';
import { NewsDetailsComponent } from './components/news/news-details-component';

const appRoutes: Routes = [
    { path: '', component: MapComponent },
    { path: 'login', component: LoginForm },
    { path: 'register', component: RegisterComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
