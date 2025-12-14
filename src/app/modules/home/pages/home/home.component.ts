import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { FeaturedProductsComponent, ProductCard } from '../../components/featured-product/featured-product.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { DescriptionKinhKyComponent } from '../../components/description-kinh-ky/description-kinh-ky.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  imports: [FeaturedProductsComponent
    , AboutUsComponent, DescriptionKinhKyComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  APP_IMAGES = APP_IMAGES;

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
}
