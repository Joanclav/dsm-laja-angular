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
    { name: "🏥 CGR", weekday: "08:15 - 17:03", weekend: "Cerrado" },
    { name: "🏥 CCR", weekday: "08:15 - 17:03", weekend: "Cerrado" },
    { name: "🏥 Puente Perales", weekday: "08:15 - 16:30", weekend: "Cerrado" },
    { name: "🏥 Santa Elena", weekday: "08:15 - 16:30", weekend: "Cerrado" },
    { name: "🏥 La Colonia", weekday: "08:15 - 16:30", weekend: "Cerrado" },
  ];
}
