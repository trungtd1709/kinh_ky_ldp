import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  APP_IMAGES = APP_IMAGES;
  @Input() topTitle: string = 'VỀ CHÚNG TÔI';
  @Input() mainTitle: string = 'KINH KY HERITAGE SEASONAL GIFTS';
  @Input() description: string = 'Our mission is to empower businesses with innovative and effective marketing solutions tailored to their unique goals and challenges. With a team of seasoned experts, we are dedicated to driving growth and enhancing brand visibility in today\'s competitive landscape.';
  @Input() image: string = APP_IMAGES.FEATURED_PRODUCTS[1];
  @Input() backgroundColor: string = '#1a5040';
  @Input() accentColor: string = '#ff8c42';
  @Input() imagePosition: 'left' | 'right' = 'left';
}