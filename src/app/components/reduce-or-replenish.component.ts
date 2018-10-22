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
  acNumHrs = 0;
  numHrs = 0;

  maxAC = 0;
  maxWH = 0;
  maxCD = 0;

  readonly YEARLYACCONSTANT = 1.5 * 30 * 0.23 *12;

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
        this.acNumHrs = this.electricity.AChrs;

        this.maxAC = this.electricity.AChrs;
        this.maxWH = this.waterHeater.WHhrs;
        this.maxCD = this.dryer.CDhrs;

        //Initiaize all hours
        this.acNumHrs = this.electricity.AChrs;
      })
  }

  formatLabel(val: number) {
    return (val);
  }


  reduceElectricity(event: MatSliderChange) {
    let percentage = event.value ;
    this.reducedElectricity = Math.round(percentage*this.electricity.ACqty* this.YEARLYACCONSTANT * 100)/100;

   // if (event.value == 0) {
   //     this.reducedElectricity = Math.round(this.electricity.yearlyTotal*100)/100;
        
    //    return;
   // }
   
  //  percentage = 100 - percentage;
  //  this.reducedElectricity = this.electricity.yearlyTotal * (percentage/100);
  //  this.reducedElectricity = Math.round(this.reducedElectricity * 100)/100;

    this.acNumHrs = event.value;
    
  }
  reduceHours(event: MatSliderChange ) {
    let hours = event.value;
    if (event.value ==0) {
      this.acNumHrs = this.electricity.AChrs;
      return;
    }
    this.numHrs = this.electricity.AChrs * (hours/100);
  }
}

