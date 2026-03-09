import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Auth, user, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isOpen = false;

  private auth = inject(Auth);
  private router = inject(Router);

  user$ = user(this.auth);

  info = {
    email: 'contacto@dsmlaja.cl',
    telefono: '131'
  };

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
    this.isOpen = false;
  }
}
