import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal(false);

  constructor(private router: Router) { }

  login() {
    console.log('Servicio: Cambiando estado a Logueado');
    this.isLoggedIn.set(true);
    this.router.navigate(['/accesos']); // <--- ¡ESTA LÍNEA ES CRÍTICA!
  }

  logout() {
    this.isLoggedIn.set(false);
    this.router.navigate(['/']);
  }
}
