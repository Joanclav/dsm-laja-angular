import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    alert('Solicitud enviada. Espera la aprobación del administrador en tu correo.');
    this.router.navigate(['/']);
  }
}
