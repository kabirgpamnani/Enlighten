import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnlightenService } from '../enlighten.service';
import { ElectricityData, WaterHeaterData, DryerData} from '../model';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  @ViewChild('toBeExported') toBeExportedRef: ElementRef;

  electricityData: ElectricityData;
  waterHeaterData: WaterHeaterData;
  dryerData: DryerData;

  electricityCSV: string = "";
  dryerCSV: string = "";
  waterCSV: string = "";

  constructor(private enlightenSvc: EnlightenService) { }

  ngOnInit() {
    this.enlightenSvc.getAllData()
        .then(results => {
          this.electricityData = results[0];
          this.waterHeaterData = results[1];
          this.dryerData = results[2];
          this.electricityCSV = `${this.electricityData.AChrs} ${this.electricityData.ACqty}, ${this.electricityData.co2}, ${this.electricityData.monthlyTotal}, ${this.electricityData.yearlyTotal}`
        })
  }

  exportIt() {
    const elem: any  = document.querySelector("#toBeExported");
    console.log('element: ', elem)
    elem.select();
    document.execCommand('copy');
  }

}
