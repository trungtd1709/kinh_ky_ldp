import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { FeaturedProductsComponent, ProductCard } from '../../components/featured-product/featured-product.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { DescriptionKinhKyComponent } from '../../components/description-kinh-ky/description-kinh-ky.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';
import { ScrollAnimateDirective } from '../../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FeaturedProductsComponent
    , AboutUsComponent, DescriptionKinhKyComponent, ContactUsComponent, ScrollAnimateDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  APP_IMAGES = APP_IMAGES;
  bannerLoaded = false;

  myProducts: ProductCard[] = [
    {
      image: APP_IMAGES.FEATURED_PRODUCTS[1],
      title: 'Hộp quà Tết'
    },
    {
      image: APP_IMAGES.FEATURED_PRODUCTS[2],
      title: 'Bánh trung thu'
    },
    {
      image: APP_IMAGES.FEATURED_PRODUCTS[3],
      title: 'Khăn lụa'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Trigger banner animation after a short delay
      setTimeout(() => {
        this.bannerLoaded = true;
      }, 100);
    } else {
      this.bannerLoaded = true;
    }
  }
}
