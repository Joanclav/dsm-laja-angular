import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Importar RouterLink
import { AuthService } from '../../services/auth.service'; // Importar el servicio
//import { DATA } from '../../config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], // Agregar RouterLink aquí
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isOpen = false;
  //info = DATA;

  // Inyectamos el servicio de autenticación público
  constructor(public auth: AuthService) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
