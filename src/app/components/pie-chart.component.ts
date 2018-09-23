import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

export interface PieSlice {
    name: string;
    y: number;
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterContentInit {

  @Input() title: string = "Pie Chart title";
  @Input() pieData: PieSlice[] = [];

  pieChart: Chart;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
      this.pieChart = new Chart({
          chart: { type: 'pie' },
          title: { text: this.title },
          plotOptions: {
              pie: {
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b> {point.percentage:.1f}%'
                  }
              }
          },
          series: [{
              data: this.pieData
          }]
      })
  }

}
