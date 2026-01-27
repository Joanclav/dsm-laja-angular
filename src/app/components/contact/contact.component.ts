import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para formularios

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  isSubmitted = false;
  email = '';
  message = '';

  onSubmit(event: Event) {
    event.preventDefault(); // Evita que la página se recargue
    // Aquí conectarías con Formspree real si quisieras
    this.isSubmitted = true;
  }
}