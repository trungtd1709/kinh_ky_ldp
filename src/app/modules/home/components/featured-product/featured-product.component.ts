import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { APP_COLORS } from '../../../../shared/constant/app-colors';

export interface ProductCard {
  image: string;
  title: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductsComponent {
  @Input() sectionTitle: string = 'SẢN PHẨM NỔI BẬT';
  @Input() backgroundColor: string = '#f5f0e8';
  @Input() backgroundImage: string = APP_IMAGES.BANNER.FEATURED_PROUDCT_BANNER;
  @Input() productTitleColor: string = APP_COLORS.TEXT.PRIMARY;
  @Input() products: ProductCard[] = [
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
