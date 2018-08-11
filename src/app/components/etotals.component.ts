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

  constructor(private enlightenSvc: EnlightenService, private router: Router) { }
  
  ngOnInit() {
    this.enlightenSvc.getAllData()
      .then(data => {
        console.log('data:\n', data);
        this.electricity = data[0] as ElectricityData;
        this.waterHeater = data[1] as WaterHeaterData;
        this.dryer = data[2] as DryerData;
      })
  }
  submit() {
    this.router.navigate(['/reduceorreplenish']);
  }

}
