import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  APP_IMAGES = APP_IMAGES;
}
