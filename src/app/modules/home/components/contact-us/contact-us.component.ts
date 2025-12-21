import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  APP_IMAGES = APP_IMAGES;

  // Social section
  @Input() socialTitle: string = 'THEO DÕI CHÚNG TÔI';
  @Input() facebookUrl: string = 'https://www.facebook.com/profile.php?id=61580393174781';
  @Input() instagramUrl: string = 'https://instagram.com';
  @Input() zaloUrl: string = 'https://zalo.me/84835665885';
  zaloImage: string = APP_IMAGES.ZALO;

  // Contact section
  @Input() contactTitle: string = 'LIÊN HỆ CHÚNG TÔI';
  @Input() brandName: string = 'KINH KỲ HERITAGE - SEASONAL GIFTS';
  @Input() addressLabel: string = 'Địa chỉ';
  @Input() address: string = 'Ngõ 48 Lê Văn Lương, phường Yên Hoà, Thành phố Hà Nội';
  @Input() contactLabel: string = 'Liên hệ';
  @Input() email: string = 'seasonalgifts@kinhkyheritage.com';
  @Input() phone: string = '(+84) 835-665-885';
  @Input() backgroundImage: string = APP_IMAGES.BANNER.BANNER_6;
  @Input() backgroundImageFollow: string = APP_IMAGES.BANNER.BANNER_7;
  @Input() backgroundImageContact: string = APP_IMAGES.BANNER.BANNER_8;
}
