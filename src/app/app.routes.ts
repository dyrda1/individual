import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/component/login.component";
import {MainComponent} from "./pages/main/main.component";
import {NewsComponent} from "./pages/news/news.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AuthGuard} from "./auth/auth.guard";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];
