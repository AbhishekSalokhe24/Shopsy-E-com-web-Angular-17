import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxSkeletonLoaderModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() childArray: any[] | undefined;
  @Input() isLoading: boolean = true;
}
