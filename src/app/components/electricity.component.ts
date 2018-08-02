import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { ElectricityData } from '../model';
import { EnlightenService } from '../enlighten.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit, OnDestroy {

  formSub: Subscription;

  @ViewChild('electricityForm') electricityForm: NgForm;

  electricityData: ElectricityData  = {
    name: 'electricity',
    ACqty: 100,
    AChrs: 100,
    ACkWH: 1.5,
    monthlyTotal: 0,
    yearlyTotal: 0,
    co2: 0
  };

  constructor(private router: Router, private enlightenSvc: EnlightenService) { }

  //Called when component is created
  ngOnInit() { 
    this.formSub = this.electricityForm.valueChanges.subscribe(
      //When the form is changed, this function will be called
      //Update calulation when form data changes
      (val) => {
        const acQty = val.ACqty || 0;
        const acHrs = val.AChrs || 0;
        this.electricityData.ACqty = acQty;
        this.electricityData.AChrs = acHrs;
        this.electricityData.monthlyTotal = acQty * 1.5 * acHrs * 30 * 0.23;
        this.electricityData.yearlyTotal = this.electricityData.monthlyTotal * 12;
        this.electricityData.co2 = this.electricityData.monthlyTotal * 0.2;
      }
    )

    // Monad
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
  }

  ngOnDestroy() {
    //Must unsub otherwise memory leak
    this.formSub.unsubscribe();
  }

  saveValues() {
    console.log('saving values to database: ', this.electricityData);
    const promise = this.enlightenSvc.updateElectricity(this.electricityData)
    //resolve/good -> then will be called
    promise.then(() => {
      console.log('we have save the data')
    });
    //reject/bad -> catch will be called
    promise.catch((err) => {
      console.error('Update error: ', err);
    });

  }

  submit() {
    this.router.navigate(['/etotals']);
  }

}
