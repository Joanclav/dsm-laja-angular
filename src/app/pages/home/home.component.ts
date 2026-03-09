import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { ProgramsComponent } from '../../components/programs/programs.component';
import { NewsComponent } from '../../components/news/news.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
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
