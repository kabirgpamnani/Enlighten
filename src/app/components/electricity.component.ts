import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { ElectricityData } from '../model';
import { EnlightenService } from '../enlighten.service';

import { WaterHeaterData } from '../model';
import { DryerData } from '../model';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit, OnDestroy {

  formSub: Subscription;

  @ViewChild('dryerForm') dryerForm: NgForm;

  dryerData: DryerData = {

    name: 'dryer',
    CDqty: 0,
    CDhrs: 0,
    CDkWH: 3,
    CDmonthlyTotal: 0,
    CDyearlyTotal: 0,
    CDco2: 0




  }

  @ViewChild('waterHeaterForm') WaterHeaterForm: NgForm;

  waterHeaterData: WaterHeaterData = {
    name: 'waterHeater',
    WHqty: 0,
    WHhrs: 0,
    WHkWH: 3,
    WHmonthlyTotal: 0,
    WHyearlyTotal: 0,
    WHco2: 0

  }

  @ViewChild('electricityForm') electricityForm: NgForm;

  electricityData: ElectricityData = {
    name: 'electricity',
    ACqty: 0,
    AChrs: 0,
    ACkWH: 1.5,
    monthlyTotal: 0,
    yearlyTotal: 0,
    co2: 0

  };


  constructor(private router: Router, private enlightenSvc: EnlightenService) { }


  ngOnInit() {  //Called when component is created - lifecycle method
    this.enlightenSvc.getAllData() //calls method from enlighten.service
    .then(results => { //gets all of the data from the database
      this.electricityData = results[0]; //electricity data
      this.waterHeaterData = results[1]; // WH data
      this.dryerData = results[2]; // CD data
    })
    this.formSub = this.electricityForm.valueChanges.subscribe( //valueChanges allows for the form to change upon input
      //When the form is changed, this function will be called
      //Update calculation when form data changes
      (val) => {
        console.info('>>> elec form changes')
        const acQty = val.ACqty || 0;
        const acHrs = val.AChrs || 0;
        this.electricityData.ACqty = acQty;
        this.electricityData.AChrs = acHrs;
        this.electricityData.monthlyTotal = acQty * 1.5 * acHrs * 30 * 0.23; //calculating monthly total using user input
        this.electricityData.yearlyTotal = Math.round(this.electricityData.monthlyTotal * 12 * 100)/100; //calculating yearly total using monthly total
        this.electricityData.co2 = Math.round(acQty * 1.5 * acHrs * 30 * 0.009*100)/100;
        console.info('done')
      }
    )
    this.formSub = this.dryerForm.valueChanges.subscribe(
      //When the form is changed, this function will be called
      //Update calculation when form data changes
      (val) => {
        const cdQty = val.CDqty || 0;
        const cdHrs = val.CDhrs || 0;
        this.dryerData.CDqty = cdQty;
        this.dryerData.CDhrs = cdHrs;
        this.dryerData.CDmonthlyTotal = Math.round(cdQty * 3 * cdHrs * 30 * 0.23*100)/100;
        this.dryerData.CDyearlyTotal = Math.round(this.dryerData.CDmonthlyTotal * 12*100)/100;
        this.dryerData.CDco2 = Math.round(cdQty * 3 * cdHrs * 30 * 0.009*100)/100;
      }

    )
    this.formSub = this.WaterHeaterForm.valueChanges.subscribe(
      (val) => {
        const whQty = val.WHqty || 0;
        const whHrs = val.WHhrs || 0;
        this.waterHeaterData.WHqty = whQty;
        this.waterHeaterData.WHhrs = whHrs;
        this.waterHeaterData.WHmonthlyTotal = Math.round(whQty * 3 * whHrs * 30 * 0.23*100)/100;
        this.waterHeaterData.WHyearlyTotal = Math.round(this.waterHeaterData.WHmonthlyTotal *100* 12)/100;
        this.waterHeaterData.WHco2 = Math.round(whQty * 3 * whHrs * 30 * 0.009 * 100)/100;
      }
    )

   

    // Monad
    /*
    this.enlightenSvc.getElectricity() //returns a Promise
      .then((recs: ElectricityData[]) => {
        console.log('result from database: ', recs);
        if (recs.length > 0) {
          this.electricityData = recs[0];
        }
      }) //returns a Promise
      .catch(err => {
        console.error('Get error: ', err);
      })
      */
  }

  ngOnDestroy() {
    //Must unsub otherwise memory leak
    this.formSub.unsubscribe();
  }
  processWaterHeater() {
    console.log('saving values')

    console.log(this.waterHeaterData);
    const promise = this.enlightenSvc.updateWaterHeater(this.waterHeaterData);
    promise.then(() => {
      console.log('we have save the data')
    });
    //reject/bad -> catch will be called
    promise.catch((err) => {
      console.error('Update error: ', err);
    });
  }


  dryer() {
    console.log('saving values')
    const promise = this.enlightenSvc.updateDryer(this.dryerData);
    promise.then(() => {
      console.log('we have save the data')
    });
    //reject/bad -> catch will be called
    promise.catch((err) => {
      console.error('Update error: ', err);
    });
  }


  saveValues() { //function for saving data 
    console.log('saving values to database: ', this.electricityData);
    const promise = this.enlightenSvc.updateElectricity(this.electricityData) //calls updateElectricity
    //resolve/good -> then will be called
    promise.then(() => {
      console.log('data is saved') //to show programmer that data has been saved
    });
    //reject/bad -> catch will be called
    promise.catch((err) => {
      console.error('Update error: ', err); //to show programmer what the error is 
    });

  }

  submit() {
    this.router.navigate(['/etotals']); /* '/etotals' replaces the ending of the current link with etotals, indicating a 
    navigation to the etotals component*/
  }

  exportData() {
    this.router.navigate(['/export'])
  }

  
  

}
