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
  reducedWaterHeater = 0.0;
  reducedDryer = 0.0;
  acNumHrs = 0;
  cdNumHrs = 0;
  whNumHrs = 0;

  maxAC = 0;
  maxWH = 0;
  maxCD = 0;

  co2Total = 0;
  co2AC = 0;
  co2WH = 0;
  co2CD = 0;
  co2ACTrees = 0;
  co2WHTrees = 0;
  co2CDTrees = 0;
  co2TreeTotal = 0;
  ACsavings = 0;
  WHsavings = 0;
  CDsavings = 0;


  readonly YEARLYACCONSTANT = 1.5 * 30 * 0.23 * 12;
  readonly YEARLYWHCONSTANT = 3 * 30 * 0.23 * 12;
  readonly YEARLYCDCONSTANT = 3 * 30 * 0.23 *12;

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
        this.reducedWaterHeater = this.waterHeater.WHyearlyTotal;
        this.reducedDryer = this.dryer.CDyearlyTotal;

        this.maxAC = this.electricity.AChrs;
        this.maxWH = this.waterHeater.WHhrs;
        this.maxCD = this.dryer.CDhrs;

        //Initiaize all hours
        this.acNumHrs = this.electricity.AChrs;
        this.whNumHrs = this.waterHeater.WHhrs;
        this.cdNumHrs - this.dryer.CDhrs;
//co2
        
          this.co2AC = Math.round(this.electricity.co2*100)/100;
          this.co2WH = Math.round(this.waterHeater.WHco2*100)/100;
          this.co2CD = Math.round(this.dryer.CDco2*100)/100;
          
          //trees
          this.co2ACTrees = Math.round(this.co2AC/5*100)/100;
          this.co2WHTrees = Math.round(this.co2WH/5*100)/100;
          this.co2CDTrees = Math.round(this.co2CD/5*100)/100;

          //totals
          this.co2Total = this.electricity.co2 +
          this.waterHeater.WHco2 + this.dryer.CDco2;
          this.co2TreeTotal = Math.round((this.co2ACTrees + this.co2WHTrees + this.co2CDTrees)*100)/100;

          //savings 
          
      })
  }

  formatLabel(val: number) {
    return (val);
  }


  reduceElectricity(event: MatSliderChange) {
    let newHours = event.value;
    this.reducedElectricity =(newHours * this.electricity.ACqty * this.YEARLYACCONSTANT);

    this.acNumHrs = event.value;
    this.ACsavings = this.electricity.yearlyTotal - this.reducedElectricity;
  }
 
  reduceWaterHeater(event: MatSliderChange) {
    let newHours = event.value;
    this.reducedWaterHeater = (newHours*this.waterHeater.WHqty*this.YEARLYWHCONSTANT);


    this.whNumHrs = event.value; 
this.WHsavings = this.waterHeater.WHyearlyTotal - this.reducedWaterHeater;

  }
  reduceDryer(event: MatSliderChange) {
    let newHours = event.value;
    this.reducedDryer =(newHours * this.dryer.CDqty*this.YEARLYCDCONSTANT)

    this.cdNumHrs = event.value;
    this.CDsavings = this.dryer.CDyearlyTotal - this.reducedDryer;


  }

}

