import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  newsItems = [
    { 
      title: "Campaña Invierno", 
      date: "23 Ene 2026", 
      desc: "Vacúnate contra la influenza en todos nuestros centros de salud." // <--- AHORA SE LLAMA 'desc'
    },
    { 
      title: "Nuevo Horario", 
      date: "20 Ene 2026", 
      desc: "Atención extendida de urgencia hasta las 00:00 hrs." 
    },
    { 
      title: "Operativo Dental", 
      date: "15 Ene 2026", 
      desc: "Inscripciones abiertas para chequeo dental en sector rural." 
    }
  ];
}