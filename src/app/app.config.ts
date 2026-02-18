import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "dsm-laja-app", appId: "1:465003433728:web:a8b12e65fd1daae903ade5", storageBucket: "dsm-laja-app.firebasestorage.app", apiKey: "AIzaSyBKgKGYaTUtj2q_kyCpxIz_AdBdDkGDjvs", authDomain: "dsm-laja-app.firebaseapp.com", messagingSenderId: "465003433728", measurementId: "G-ZFW9D2553M" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
