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
    {id: 1, url: '../assets/images/carousel/51090470.jpg', heading: "Nationwide deliveries and collection | We collect and deliver all across the UK"},
    {id: 2, url: '../assets/images/carousel/98924574.jpg', heading: "Free no obligation quotes | Get a quote online today"},
    {id: 3, url: '../assets/images/carousel/661996507.jpg', heading: "We're always open | Open 24 hours a day, 7 days a week"},
    {id: 4, url: '../assets/images/carousel/parcel-delivery.jpg', heading: "Quality vehicles | Small Vans to XLWB Vans, all goods are fully insured"},
  ];

  public slides: any = this.images;
}
