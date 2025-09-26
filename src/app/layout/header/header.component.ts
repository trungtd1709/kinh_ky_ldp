// navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_IMAGES } from '../../shared/constant/app-images';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  APP_IMAGES = APP_IMAGES;
  isMenuCollapsed = true;
}