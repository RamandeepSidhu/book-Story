import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent {
  @Input() imageUrl: string | undefined;

}
