import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  nombre: string = '';
  rut: string = '';
  telefono: string = '';
  email: string = '';
  password: string = '';

  loading: boolean = false;

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  async onSubmit() {

    if (!this.email || !this.password || !this.rut) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.loading = true;

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: this.nombre });

      const userDocRef = doc(this.firestore, `usuarios/${user.uid}`);

      await setDoc(userDocRef, {
        uid: user.uid,
        nombre: this.nombre,
        email: this.email,
        rut: this.rut,
        telefono: this.telefono,
        rol: 'usuario',
        estado: 'PENDIENTE',
        fechaRegistro: new Date()
      });

      alert('¡Cuenta creada con éxito! Tu acceso está PENDIENTE de aprobación por el administrador.');
      this.router.navigate(['/']);

    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está registrado.');
      } else if (error.code === 'auth/weak-password') {
        alert('La contraseña debe tener al menos 6 caracteres.');
      } else {
        alert('Error al registrar: ' + error.message);
      }
    } finally {
      this.loading = false;
    }
  }
}
