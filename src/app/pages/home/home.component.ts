import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los componentes que usas en el HTML
// Asegúrate de que las rutas sean correctas según tus carpetas
import { HeroComponent } from '../../components/hero/hero.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { ProgramsComponent } from '../../components/programs/programs.component';
import { NewsComponent } from '../../components/news/news.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // AQUÍ es donde "registramos" los componentes para poder usarlos en el HTML
  imports: [
    CommonModule,
    HeroComponent,
    ScheduleComponent,
    ProgramsComponent,
    NewsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',

})
export class HomeComponent { }
