import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  // Ruta por defecto (Home)
  { path: '', component: HeroComponent },

  // Nuevas rutas
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'accesos', component: DashboardComponent },

  // Redirección si la ruta no existe
  { path: '**', redirectTo: '' }
];
