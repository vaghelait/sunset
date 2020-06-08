import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.slides);
  }

  public images = [
    '../51090470.jpg',
    '../logo.png',
    '../stock-photo-courier-is-loading-the-van-with-parcels-661996507.jpg',
    '../parcel-delivery.jpg',
  ];

  public slides: any = this.images;
}
