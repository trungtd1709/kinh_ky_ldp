import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { CarouselComponent, CarouselItem } from '../../../../shared/components/carousel/carousel.component';
import { FeaturedProductsComponent, ProductCard } from '../../components/featured-product/featured-product.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  APP_IMAGES = APP_IMAGES;
  carouselItems: CarouselItem[] = [
    {
      imageUrl: APP_IMAGES.BANNER,
      title: 'Kinh kỳ heritage',
      description: 'Discover the beauty of Kinh kỳ heritage',
      link: 'https://example.com'
    },  
     {
      imageUrl: APP_IMAGES.BANNER,
      title: 'Kinh kỳ heritage',
      description: 'Discover the beauty of Kinh kỳ heritage',
      link: 'https://example.com'
    },  
  ];

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
