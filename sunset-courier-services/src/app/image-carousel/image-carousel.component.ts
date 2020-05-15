import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.slides);
  }


  public images = ['../parcel-delivery.jpg','../parcel-delivery.jpg','../parcel-delivery.jpg','../parcel-delivery.jpg','../parcel-delivery.jpg'];


  public slides: any = this.images;

}
