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
    './app/images/51090470-young-delivery-men-loading-cardboard-boxes-in-truck.jpg',
    '../98924574-packages-with-supplies.jpg',
    '../stock-photo-courier-is-loading-the-van-with-parcels-661996507.jpg',
    '../parcel-delivery.jpg',
  ];

  public slides: any = this.images;
}
