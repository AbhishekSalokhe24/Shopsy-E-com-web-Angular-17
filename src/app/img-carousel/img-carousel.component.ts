import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-carousel.component.html',
  styleUrl: './img-carousel.component.css'
})
export class ImgCarouselComponent {
  
  
  @Input() childArray: any[] | undefined;

  
}
