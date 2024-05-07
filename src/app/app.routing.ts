import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Pages/login/login.component';
//import { SignInComponent } from './components/sign-in/sign-in.component';
//import { SignUpComponent } from './components/sign-up/sign-up.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { AuthGuard } from './shared/guard/auth.guard';
//import { BjParentRegisterComponent } from "./pages/bj-inscription/bj-parent-register/bj-parent-register.component";
const routes: Routes =[
  {
    path: 'login',
    component: LoginComponent,
  },

  /*{
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }, */{
    path: '',
    //component: AdminLayoutComponent,
    //canActivate: [AuthGuard],
    //children: [{
    //  path: '',
    //  loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    //}]
  },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  //{ path: 'sign-in', component: SignInComponent },
 // { path: 'register-user', component: SignUpComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
 // { path: 'forgot-password', component: ForgotPasswordComponent },
 // { path: 'verify-email-address', component: VerifyEmailComponent },
  //{ path: 'parent-pre-inscription/'+localStorage.getItem('schoolId'), component: BjParentRegisterComponent }
 // { path: 'parent-pre-inscription/OD9bHgGW20O9X6QrbrTp', component: BjParentRegisterComponent }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule {

}
