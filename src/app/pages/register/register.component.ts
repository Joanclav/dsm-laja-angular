import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importante para ngModel
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
  // Variables para guardar lo que escribe el usuario
  nombre: string = '';
  rut: string = '';
  telefono: string = '';
  email: string = '';
  password: string = '';

  loading: boolean = false; // Para mostrar un "cargando..."

  // Inyección de dependencias (Nueva forma de Angular)
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  async onSubmit() {
    // Validar campos básicos
    if (!this.email || !this.password || !this.rut) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.loading = true;

    try {
      // 1. Crear el usuario en Firebase Authentication (Email y Pass)
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      // 2. Actualizar el nombre visible del usuario
      await updateProfile(user, { displayName: this.nombre });

      // 3. Guardar los datos extra en la Base de Datos (Firestore)
      // Usamos el UID del usuario como ID del documento para encontrarlo fácil
      const userDocRef = doc(this.firestore, `usuarios/${user.uid}`);

      await setDoc(userDocRef, {
        uid: user.uid,
        nombre: this.nombre,
        email: this.email,
        rut: this.rut,
        telefono: this.telefono,
        rol: 'usuario',       // Rol por defecto
        estado: 'PENDIENTE',  // <--- IMPORTANTE: Aquí empieza el flujo de aprobación
        fechaRegistro: new Date()
      });

      // 4. Éxito
      alert('¡Cuenta creada con éxito! Tu acceso está PENDIENTE de aprobación por el administrador.');
      this.router.navigate(['/']); // Volver al inicio

    } catch (error: any) {
      console.error(error);
      // Manejo de errores comunes
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
