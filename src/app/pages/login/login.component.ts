import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  async onLogin() {
    this.loading = true;

    try {
      // 1. Intentar loguear con correo y contraseña
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      // 2. Buscar los datos extra en la Base de Datos (Rol y Estado)
      const docRef = doc(this.firestore, 'usuarios', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        // 3. REGLA DE ORO: Verificar si está aprobado
        if (data['estado'] === 'PENDIENTE') {
          await signOut(this.auth); // Lo sacamos inmediatamente
          alert('Tu cuenta aún está en revisión. Espera a que un administrador te apruebe.');
          this.loading = false;
          return;
        }

        // 4. Redirigir según el ROL
        if (data['rol'] === 'admin') {
          this.router.navigate(['/admin']); // Panel de Jefe
        } else {
          this.router.navigate(['/accesos']);
        }

      } else {
        // Si el usuario existe en Auth pero no en la Base de Datos (raro, pero posible)
        alert('Error: No se encontraron datos de perfil.');
      }

    } catch (error: any) {
      console.error(error);
      alert('Error al ingresar: Verifique sus credenciales.');
    } finally {
      this.loading = false;
    }
  }
}
