import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ¡Importante para *ngFor!

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
})
export class ProgramsComponent {
  programs = [
    {
      title: "Salud Cardiovascular",
      desc: "Control y seguimiento de hipertensión, diabetes y dislipidemia.",
      icon: "heart"
    },
    {
      title: "Programa de la Mujer",
      desc: "Atención integral, control prenatal y toma de PAP.",
      icon: "woman"
    },
    {
      title: "Salud Mental",
      desc: "Apoyo psicológico y psicosocial para nuestra comunidad.",
      icon: "brain"
    },
    {
      title: "Adulto Mayor",
      desc: "Atención gerontológica y exámenes de funcionalidad (EMPAM).",
      icon: "senior"
    },
    {
      title: "Vida Sana",
      desc: "Estrategias para combatir la obesidad y el sedentarismo.",
      icon: "apple"
    },
    {
      title: "Programa Dental",
      desc: "Atención odontológica preventiva y curativa.",
      icon: "tooth"
    }
  ];
}
