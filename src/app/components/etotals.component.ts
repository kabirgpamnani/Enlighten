import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnlightenService } from '../enlighten.service';
import { ElectricityData, WaterHeaterData, DryerData } from '../model';
import { PieSlice } from './pie-chart.component';

const LABELS = [ 'Electricity', 'Water Heater', 'Dryer'];


@Component({
  selector: 'app-etotals',
  templateUrl: './etotals.component.html',
  styleUrls: ['./etotals.component.css']
})
export class EtotalsComponent implements OnInit {

  electricity: ElectricityData;
  waterHeater: WaterHeaterData;
  dryer: DryerData;

  monthlyTotal = 0;
  yearlyTotal = 0;
  co2Total = 0;

  pieData = [
  ]

  constructor(private enlightenSvc: EnlightenService, private router: Router) { }
  
  ngOnInit() {
    this.enlightenSvc.getAllData()
      .then(data => {
        console.log('data:\n', data);
        this.electricity = data[0] as ElectricityData;
        this.waterHeater = data[1] as WaterHeaterData;
        this.dryer = data[2] as DryerData;
        this.monthlyTotal = Math.round((this.electricity.monthlyTotal + 
            this.waterHeater.WHmonthlyTotal + this.dryer.CDmonthlyTotal)*100)/100;
        this.pieData.push({
          name: 'Breakdown of Total',
          data: this.normalize(this.monthlyTotal, 
            [ this.electricity.monthlyTotal, this.waterHeater.WHmonthlyTotal,
              this.dryer.CDmonthlyTotal ], LABELS)
        });
          
        this.yearlyTotal = Math.round((this.electricity.yearlyTotal +
            this.waterHeater.WHyearlyTotal + this.dryer.CDyearlyTotal)*100)/100;
      

        this.co2Total = Math.round((this.electricity.co2 + 
            this.waterHeater.WHco2 + this.dryer.CDco2)*100)/100;
      
      })
  }

  normalize(total: number, data: number[], label: string[]): PieSlice[] {
    const normData: PieSlice[] = []
    for (let i in data) {
      normData.push({
        name: label[i],
        y: Math.round((data[i] / total) * 100)
      })
    }
    return (normData);
  }
  submit() {
    this.router.navigate(['/reduceorreplenish']);
  }

}
