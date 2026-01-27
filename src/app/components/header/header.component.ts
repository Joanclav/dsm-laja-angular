import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngIf

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isOpen = false; // Estado del menú móvil

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
} 