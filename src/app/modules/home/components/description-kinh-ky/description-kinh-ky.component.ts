import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

export interface DescriptionParagraph {
  title?: string;
  content: string;
}

@Component({
  selector: 'app-description-kinh-ky',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description-kinh-ky.component.html',
  styleUrl: './description-kinh-ky.component.scss'
})
export class DescriptionKinhKyComponent {
  @Input() leftBackgroundImage: string = APP_IMAGES.BANNER.BANNER_DESCRIPTION_1;
  @Input() rightBackgroundImage: string = APP_IMAGES.BANNER.BANNER_DESCRIPTION_2;
  @Input() mainTitle: string = 'Kinh Kỳ Heritage: Nét giao hoà giữa thanh lịch và truyền thống';
  @Input() paragraphs: DescriptionParagraph[] = [
    {
      content: 'Lấy cảm hứng từ chiều sâu di sản văn hoá Việt Nam, Kinh Kỳ Heritage mang đến sự giao thoa tinh tế giữa những hoạ văn cổ truyền và bối tổ thiết kế đương đại. Mỗi sản phẩm là một mảnh ghép trong bức tranh di sản - nơi truyền thống được thổi hồn bằng phong thái hiện đại, sang trọng mà vẫn gần gũi.'
    },
    {
      content: 'Tông xanh lục trầm biểu trưng cho sự thịnh vượng, an hoà, kết hợp cùng sắc be ấm áp gợi nên vẻ thanh lịch vượt thời gian. Sắc hoà quyện của cổ điển mẫu này chính là lời tôn vinh nét đẹp kinh kỳ, vừng bền và đầy chiều sâu của văn hoá Việt.'
    },
    {
      content: 'Mỗi bộ sưu tập quà tặng là một khúc ca tôn vinh tinh thần tỉnh táo, yêu và lòng hiếu kính - những giá trị thiêng liêng trong văn hoá Việt. Kinh Kỳ Heritage trân trọng tái hiện tinh hoa lễ hội truyền thống bằng ngôn ngữ thiết kế đương đại, tạo nên những món quà mang linh hồn của di sản, tinh thần của đất, Việt và sự trăng nhà của thời đại. Đó cũng là hành trình gìn giữ và tôn vinh - để mỗi món quà được trao đi cùng là một mảnh thời gian được giữ lại, thanh lịch và bất tận.'
    }
  ];
}
