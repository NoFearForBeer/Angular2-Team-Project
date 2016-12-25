import { Routes, RouterModule } from '@angular/router';
 
import { HomeContainer } from './components/containers/home/home-container';
import { LoginForm } from './components/login/loginForm-component';
import { RegisterComponent } from './components/register/register-component';
import { MapComponent } from './components/map/map-component';
import { NewsComponent } from './components/news/news-component';
 
const appRoutes: Routes = [
    { path: '', component: MapComponent},
    { path: 'login', component: LoginForm },
    { path: 'register', component: RegisterComponent },
    { path: 'news', component: NewsComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);