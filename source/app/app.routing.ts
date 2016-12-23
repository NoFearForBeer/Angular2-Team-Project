import { Routes, RouterModule } from '@angular/router';
 
import { HomeContainer } from './components/containers/home/home-container';
import { LoginForm } from './components/login/loginForm-component';
 
const appRoutes: Routes = [
    { path: '', component: HomeContainer},
    { path: 'login', component: LoginForm },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);