import { Component, OnInit, Input } from '@angular/core';
import { Carousel } from '../models/carousel.model';
import { ChartActivity } from '../models/chart-activity.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('modal') modal: Carousel;

  constructor() { }

  ngOnInit() {

  }

}
