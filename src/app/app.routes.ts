import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // <--- IMPORTANTE
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // <--- AQUÍ USAMOS EL NUEVO COMPONENTE
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'accesos', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
