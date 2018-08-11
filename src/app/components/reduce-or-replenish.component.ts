import { Component, OnInit } from '@angular/core';
import { EnlightenService } from '../enlighten.service';
import { ElectricityData, WaterHeaterData, DryerData } from '../model';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-reduce-or-replenish',
  templateUrl: './reduce-or-replenish.component.html',
  styleUrls: ['./reduce-or-replenish.component.css']
})
export class ReduceOrReplenishComponent implements OnInit {

  electricity: ElectricityData;
  waterHeater: WaterHeaterData;
  dryer: DryerData;

  reducedElectricity = 0.0;

  constructor(private enlightenSvc: EnlightenService) { }

  ngOnInit() {
    this.enlightenSvc.getAllData()
      .then(data => {
        console.log('data:\n', data);
        this.electricity = data[0] as ElectricityData;
        this.waterHeater = data[1] as WaterHeaterData;
        this.dryer = data[2] as DryerData;

        //Initialize all reductions
        this.reducedElectricity = this.electricity.yearlyTotal;
      })
  }

  reduceElectricity(event: MatSliderChange) {
    let percentage = event.value;
    if (event.value == 0) {
        this.reducedElectricity = this.electricity.yearlyTotal;
        return;
    }
    percentage = 100 - percentage;
    this.reducedElectricity = this.electricity.yearlyTotal * (percentage/100);
    this.reducedElectricity = Math.round(this.reducedElectricity * 100)/100;
  }

}
