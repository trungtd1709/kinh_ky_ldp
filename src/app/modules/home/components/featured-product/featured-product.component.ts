import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  @Input() titleColor: string = '#2c5f4f';
  @Input() productTitleColor: string = '#2c5f4f';
  @Input() products: ProductCard[] = [
    {
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
      title: 'Hộp quà Tết'
    },
    {
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
      title: 'Bánh trung thu'
    },
    {
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500',
      title: 'Khăn lụa'
    }
  ];
}
