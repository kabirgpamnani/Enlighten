import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CarData } from '../model';
import { EnlightenService } from '../enlighten.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnDestroy {

  formSub: Subscription;
  @ViewChild('carForm') carForm: NgForm;

  carData: CarData = {
    name: 'car',
    Cqty: 0,
    Chrs: 0,
    CmonthlyTotal: 0,
    CyearlyTotal: 0,
    Cco2: 0,

  }






  constructor(private router: Router, private enlightenSvc: EnlightenService) { }

  ngOnInit() {
    this.formSub = this.carForm.valueChanges.subscribe(
      //When the form is changed, this function will be called
      //Update calulation when form data changes
      (val) => {
        const carQty = val.Cqty || 0;
        const carHrs = val.Chrs || 0;
        this.carData.Cqty = carQty;
        this.carData.Chrs = carHrs;
        this.carData.CmonthlyTotal = carQty * 1.5 * carHrs * 30 * 0.23;
        this.carData.CyearlyTotal = this.carData.CmonthlyTotal * 12;
        this.carData.Cco2 = this.carData.CmonthlyTotal * 0.2;
        
      }

      
    )
    this.enlightenSvc.getAllData()
        .then(results => {
          console.log('results: ', results);
          this.carData = results[0];
          
        })
  }
  ngOnDestroy() {
    //Must unsub otherwise memory leak
    this.formSub.unsubscribe();
  }
  saveCar() {
    
    const promise = this.enlightenSvc.updateCar(this.carData);
    promise.then(() => {
     
    });
    promise.catch((err) => {
      console.error('Update error: ', err);
    });
}



}
