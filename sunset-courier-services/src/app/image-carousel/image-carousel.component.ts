import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public images = [
    '../assets/images/carousel/51090470.jpg',
    '../assets/images/carousel/98924574.jpg',
    '../assets/images/carousel/661996507.jpg',
    '../assets/images/carousel/parcel-delivery.jpg',
  ];

  public slides: any = this.images;
}
