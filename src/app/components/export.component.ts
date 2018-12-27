import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnlightenService } from '../enlighten.service';
import { ElectricityData, WaterHeaterData, DryerData} from '../model';
import { NgForm } from '@angular/forms';

declare let navigator: any;

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  electricityData: ElectricityData;
  waterHeaterData: WaterHeaterData;
  dryerData: DryerData;

  electricityCSV: string = "";
  dryerCSV: string = "";
  waterHeaterCSV: string = "";

  all: string = "";

  hasShare = false;

  constructor(private enlightenSvc: EnlightenService) { }

  ngOnInit() {
    console.log('navigator: ', navigator);
    this.hasShare = !! navigator.share;
    this.enlightenSvc.getAllData()
        .then(results => {
          this.electricityData = results[0];
          this.waterHeaterData = results[1];
          this.dryerData = results[2];
          this.electricityCSV = `air conditioner, ${this.electricityData.AChrs} ${this.electricityData.ACqty}, ` +
            `${this.electricityData.co2}, ${this.electricityData.monthlyTotal}, ${this.electricityData.yearlyTotal}`
          this.dryerCSV = `dryer, ${this.dryerData.CDhrs} ${this.dryerData.CDqty}, ` +
            `${this.dryerData.CDco2}, ${this.dryerData.CDmonthlyTotal}, ${this.dryerData.CDyearlyTotal}`
          this.waterHeaterCSV = `waterheater, ${this.waterHeaterData.WHhrs}, ${this.waterHeaterData.WHqty}` +
            `${this.waterHeaterData.WHco2}, ${this.waterHeaterData.WHmonthlyTotal}, ${this.waterHeaterData.WHyearlyTotal}`

          this.all = `${this.electricityCSV}\n${this.dryerCSV}\n${this.waterHeaterCSV}`
        })
  }

  share() {
    navigator.share({
      title: 'Enlighten',
      text: `${this.electricityCSV}\n${this.dryerCSV}\n${this.waterHeaterCSV}`
    })
  }

  copyIt(form: NgForm, textArea: HTMLInputElement) {
    textArea.select()
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

}
