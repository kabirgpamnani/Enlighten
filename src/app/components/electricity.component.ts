import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  submit() {
    this.router.navigate(['/etotals']);
  }

}
