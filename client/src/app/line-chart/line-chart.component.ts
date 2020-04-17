import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Cat } from '../models/cat.model';
import { ChartActivity } from '../models/chart-activity.model';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input('inputChartData') inputChartData: ChartActivity;

  public chartOptions = {};
  public chartLabels = [];
  public chartType = '';
  public chartLegend = true;
  public chartData = {};

  constructor() { }

  ngOnInit() {
    this.createHourLabels();

    this.chartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
          yAxes:[{
              ticks:{
                  callback:function(value,index,values){
                      if (value == 1) return "Active";
                      if (value == 0) return "Anti active";
                  }
              }
          }]
      }
    };
    this.chartType = 'line';
    this.chartLegend = true;
    this.chartData = [{
      data: this.inputChartData, label: 'Activity'
    }];
  }

  createHourLabels() {
    for(let i=0; i<=23; i++) {

      let timeLabel = '';

      if (i < 10) {
        timeLabel = '0'+i+':00';
      }
      else
      {
        timeLabel = i+':00';
      }

      this.chartLabels.push(timeLabel);
    }
  }

}
