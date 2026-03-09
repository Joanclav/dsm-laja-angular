import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {

  centers = [
    { name: "🏥 Consultorio General Rural (CGR)", weekday: "08:15 - 17:03", weekend: "Cerrado" },
    { name: "🏥 Centro Comunitario de Rehabilitación (CCR)", weekday: "08:15 - 17:03", weekend: "Cerrado" },
    { name: "🏥 Posta Rural Puente Perales", weekday: "08:15 - 16:30", weekend: "Cerrado" },
    { name: "🏥 Posta Rural Santa Elena", weekday: "08:15 - 16:30", weekend: "Cerrado" },
    { name: "🏥 Posta Rural La Colonia", weekday: "08:15 - 16:30", weekend: "Cerrado" },
  ];
}
