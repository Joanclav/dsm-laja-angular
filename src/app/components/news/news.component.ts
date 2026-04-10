import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
})
export class NewsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  // Variables para la animación fluida
  private animationId: number | null = null;
  private currentScroll = 0;
  private speed = 0.5; // Ajusta este valor (0.3 más lento, 1.0 más rápido)

  newsItems = [
    { title: "Campaña Invierno", date: "23 Ene 2026", desc: "Vacúnate contra la influenza..." },
    { title: "Nuevo Horario", date: "20 Ene 2026", desc: "Atención extendida de urgencia..." },
    { title: "Operativo Dental", date: "15 Ene 2026", desc: "Inscripciones abiertas..." }
  ];

  displayItems = [...this.newsItems, ...this.newsItems, ...this.newsItems];

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    const animate = () => {
      if (!this.isDragging && this.carousel) {
        const el = this.carousel.nativeElement;

        // Acumulamos el scroll en una variable decimal para suavidad total
        this.currentScroll += this.speed;
        el.scrollLeft = this.currentScroll;

        // Reset infinito suave
        if (this.currentScroll >= el.scrollWidth / 3) {
          this.currentScroll = 0;
          el.scrollLeft = 0;
        }
      }
      this.animationId = requestAnimationFrame(animate);
    };
    this.animationId = requestAnimationFrame(animate);
  }

  stopAutoScroll() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  // --- Lógica de Mouse (Drag) ---
  startDragging(e: MouseEvent) {
    this.isDragging = true;
    this.startX = e.pageX - this.carousel.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel.nativeElement.scrollLeft;
    // Sincronizamos el acumulador decimal con la posición actual al soltar/agarrar
    this.currentScroll = this.scrollLeft;
  }

  stopDragging() {
    this.isDragging = false;
    this.currentScroll = this.carousel.nativeElement.scrollLeft;
  }

  moveEvent(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.carousel.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.carousel.nativeElement.scrollLeft = this.scrollLeft - walk;
    this.currentScroll = this.carousel.nativeElement.scrollLeft;
  }
}
