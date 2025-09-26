import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  imageUrl: string;
  link?: string;
  title?: string;
  description?: string;
  alt?: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() items: CarouselItem[] = [];
  @Input() showIndicators: boolean = true;
  @Input() showNavigationArrows: boolean = true;
  @Input() pauseOnHover: boolean = true;
  @Input() interval: number = 5000; // 5 seconds
  @Input() wrap: boolean = true;
  @Input() keyboard: boolean = true;

  onSlideClick(item: CarouselItem): void {
    if (item.link) {
      window.open(item.link, '_blank');
    }
  }
}
