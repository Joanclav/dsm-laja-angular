import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para fechas

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
// Si te da error, borra esta línea o crea el archivo .css vacío
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear(); // Esto obtiene el año actual
}
