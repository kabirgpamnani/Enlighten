import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

import * as D3 from 'd3';
import * from 'd3-scale';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterContentInit {

  @ViewChild('pieChart') pieChartElem: ElementRef;
  @Input() title: string = "Pie Chart title";
  @Input() pieData: number[] = [];

  //private host: D3.Selection;
  //private svg: D3.Selection;
  private host: any;
  private svg: any;
  private width: number;
  private height: number;
  private radius: number;

  constructor() { }

  ngOnInit() { 
  }

  ngAfterContentInit() {
    this.host = D3.select(this.pieChartElem.nativeElement);
    this.width = 200;
    this.height = 200;
    this.radius = Math.min(this.width, this.height) / 2;

    console.log('pieData = ', this.pieData);

    //build the SVG
    this.host.html("");
    this.svg = this.host.append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .append("g")
      .attr("transform", `translate(${this.width / 2},${this.height / 2})`)

    //Create the pie chart
    console.log('layout: ', D3.layout);
    let pie = D3.layout.pie();
    let arcSelection: D3.Selection<D3.layout.pie.Arc> = this.svg.selectAll(".arc")
        .data(pie(this.pieData))
        .enter()
        .append("g")
        .attr("class", "arc");

    //Populate pie
    let innerRadius = this.radius - 50;
    let outerRadius = this.radius - 10;
    let pieColor = D3.scale.category20c();
    let arc = D3.svg.arc<D3.layout.pie.Arc>()
        .outerRadius(outerRadius);
    arcSelection.append("path")
        .attr("d", arc)
        .attr("fill", (datum, index) => {
            return pieColor(`${index}`);
        });

    arcSelection.append("text")
        .attr("transform", (datum: any) => {
            datum.innerRadius = 0;
            datum.outerRadius = outerRadius;
            return "translate(" + arc.centroid(datum) + ")";
        })
        .text((datum, index) => this.pieData[index])
        .style("text-anchor", "middle");
  }

}
