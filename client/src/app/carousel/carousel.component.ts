import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input('slidesStore') slidesStore: Cat;

  slideDetails = [];

  // OWL carousel options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoHeight:true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {
  }

  // Triggers modal. Modal contains more details and actions about the active/selected slide
  openSlideDetailsModal(selectedSlideDetails) {

    for (let slide in this.slidesStore) {
      if (this.slidesStore[slide].id == selectedSlideDetails) {
        this.slideDetails = this.slidesStore[slide];
      }
    }

  }

}
