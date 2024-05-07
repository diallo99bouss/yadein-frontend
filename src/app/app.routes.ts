import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: AccueilComponent },
];
