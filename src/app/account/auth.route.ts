import { Route } from '@angular/router'

// Component
import { ConfirmMail2Component } from '@auth/confirm-mail-2/confirm-mail-2.component'
import { ConfirmMailComponent } from '@auth/confirm-mail/confirm-mail.component'
import { LockScreen2Component } from '@auth/lock-screen-2/lock-screen-2.component'
import { LockScreenComponent } from '@auth/lock-screen/lock-screen.component'
import { Login2Component } from '@auth/login-2/login-2.component'
import { LoginComponent } from '@auth/login/login.component'
import { Logout2Component } from '@auth/logout-2/logout-2.component'
import { LogoutComponent } from '@auth/logout/logout.component'
import { Recoverpw2Component } from '@auth/recoverpw-2/recoverpw-2.component'
import { RecoverpwComponent } from '@auth/recoverpw/recoverpw.component'
import { Register2Component } from '@auth/register-2/register-2.component'
import { RegisterComponent } from '@auth/register/register.component'
import { MaintenanceComponent } from '../extrapage/maintenance/maintenance.component'
import { LandingComponent } from '../extrapage/landing/landing.component'
import { Error404Component } from '../extrapage/404/404.component'
import { Error500Component } from '../extrapage/500/500.component'
import { HomepageComponent } from './homepage/homepage.component'


export const AUTH_ROUTES: Route[] = [
  {
    path: 'pages-login',
    component: LoginComponent,
    data: { title: 'Log In' },
  },
  {
    path:'pages-homepage',
    component: HomepageComponent,
    data: {title: 'The Insider Trade'},
  },
  {
    path: 'pages-login-2',
    component: Login2Component,
    data: { title: 'Log In' },
  },
  {
    path: 'pages-register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'pages-register-2',
    component: Register2Component,
    data: { title: 'Register' },
  },
  {
    path: 'pages-logout',
    component: LogoutComponent,
    data: { title: 'Logout' },
  },
  {
    path: 'pages-logout-2',
    component: Logout2Component,
    data: { title: 'Log Out' },
  },
  {
    path: 'pages-recoverpw',
    component: RecoverpwComponent,
    data: { title: 'Recover Password' },
  },
  {
    path: 'pages-recoverpw-2',
    component: Recoverpw2Component,
    data: { title: 'Recover Password' },
  },
  {
    path: 'pages-lock-screen',
    component: LockScreenComponent,
    data: { title: 'Lock Screen' },
  },
  {
    path: 'pages-lock-screen-2',
    component: LockScreen2Component,
    data: { title: 'Lock Screen' },
  },
  {
    path: 'pages-confirm-mail',
    component: ConfirmMailComponent,
    data: { title: 'Confirm Email' },
  },
  {
    path: 'pages-confirm-mail-2',
    component: ConfirmMail2Component,
    data: { title: 'Confirm Email' },
  },
  {
    path: 'pages-maintenance',
    component: MaintenanceComponent,
    data: { title: 'Maintenance' },
  },
  {
    path: 'landing',
    component: LandingComponent,
    data: { title: 'Landing Page' },
  },
  {
    path: 'pages-404',
    component: Error404Component,
    data: { title: 'Error 404' },
  },
  {
    path: 'pages-500',
    component: Error500Component,
    data: { title: 'Error 500' },
  },
]
