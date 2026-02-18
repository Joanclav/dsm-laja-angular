import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Auth, user, signOut } from '@angular/fire/auth'; // Importamos 'user' y 'signOut'
import { Observable } from 'rxjs'; // Necesario para manejar el stream de datos

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], // CommonModule es vital para el *ngIf
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Variables de control del menú móvil
  isOpen = false;

  // Servicios
  private auth = inject(Auth);
  private router = inject(Router);

  // Observable que nos dice si hay usuario o es null
  user$ = user(this.auth);

  // Info estática
  info = {
    email: 'contacto@dsmlaja.cl',
    telefono: '131'
  };

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // Función para cerrar sesión desde el Header
  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
    this.isOpen = false; // Cerrar menú móvil si estaba abierto
  }
}
