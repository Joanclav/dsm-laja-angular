import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importamos el cerebro
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-xl shadow-lg w-96 text-center">

        <h2 class="text-2xl font-bold text-dsm-main mb-6">Iniciar Sesión</h2>

        <input type="email" placeholder="Correo" class="w-full p-2 border rounded mb-4 focus:border-dsm-main outline-none">
        <input type="password" placeholder="Contraseña" class="w-full p-2 border rounded mb-6 focus:border-dsm-main outline-none">

        <button (click)="onLogin()" class="w-full bg-dsm-main text-white py-2 rounded hover:bg-green-700 font-bold transition duration-200">
          Ingresar
        </button>

      </div>
    </div>
  `
})
export class LoginComponent {

  // Inyectamos el AuthService para cambiar el estado y Router para movernos
  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    console.log('¡Click recibido! Intentando iniciar sesión...'); // <--- ESTO SALDRÁ EN LA CONSOLA

    this.auth.login(); // Llamamos al servicio

    // Forzamos la navegación por si el servicio no lo hace
    // (Aunque el servicio ya debería tener esta línea)
    // this.router.navigate(['/accesos']);
  }
}
