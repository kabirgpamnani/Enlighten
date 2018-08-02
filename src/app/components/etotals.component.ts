import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etotals',
  templateUrl: './etotals.component.html',
  styleUrls: ['./etotals.component.css']
})
export class EtotalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.router.navigate(['/ReduceOrReplenish']);
  }

}
