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
  @Input() description: string = 'Kinh Kỳ Heritage tôn vinh vẻ đẹp của di sản Việt Nam qua những thiết kế mang dấu ấn thời gian. Chúng tôi chắt lọc tinh hoa truyền thống, hòa quyện cùng thẩm mỹ đương đại để tạo nên những sản phẩm vừa thanh lịch, vừa giàu chiều sâu văn hoá.';
  @Input() description2: string = 'Mỗi món quà không chỉ là vật phẩm được trao đi, mà còn là lời gửi gắm về cội nguồn, về sự trân trọng và niềm tự hào đối với những giá trị bền vững của dân tộc.';
  @Input() leftImage: string = APP_IMAGES.BANNER.BANNER_DESCRIPTION_3;
  @Input() backgroundImage: string = APP_IMAGES.BANNER.BANNER_DESCRIPTION_4;
  @Input() imagePosition: 'left' | 'right' = 'left';
}