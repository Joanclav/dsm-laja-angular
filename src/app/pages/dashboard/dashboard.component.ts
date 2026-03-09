import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  isAdmin: boolean = false;
  userName: string = '';

  async ngOnInit() {
    const user = this.auth.currentUser;
    if (user) {
      const docRef = doc(this.firestore, 'usuarios', user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data();
        this.userName = data['nombre'];
        this.isAdmin = (data['rol'] === 'admin');
      }
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
