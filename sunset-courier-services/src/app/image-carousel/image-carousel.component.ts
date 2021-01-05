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

  public heading = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
  ];

  public headings: any = this.heading;

  getHeading(){

  this.slides.forEach(function (i) {
    for (let index = 0; index < i.length; index++) {
      const element = i[index];
      console.log(element);
    }
  });
  }

}
