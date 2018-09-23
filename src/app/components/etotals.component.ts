import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnlightenService } from '../enlighten.service';
import { ElectricityData, WaterHeaterData, DryerData } from '../model';


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
        this.monthlyTotal = this.electricity.monthlyTotal + 
            this.waterHeater.WHmonthlyTotal + this.dryer.CDmonthlyTotal;
        this.pieData.push({
          name: 'Monthly Total',
          data: this.normalize(this.monthlyTotal, 
            [ this.electricity.monthlyTotal, this.waterHeater.WHmonthlyTotal,
              this.dryer.CDmonthlyTotal ])
        });
          
        this.yearlyTotal = this.electricity.yearlyTotal +
            this.waterHeater.WHyearlyTotal + this.dryer.CDyearlyTotal;
        this.co2Total = this.electricity.co2 + 
            this.waterHeater.WHco2 + this.dryer.CDco2;
      })
  }

  normalize(total: number, data: number[]): number[] {
    const normData: number[] = []
    for (let d of data)
      normData.push(d / total)
    return (normData);
  }
  submit() {
    this.router.navigate(['/reduceorreplenish']);
  }

}
