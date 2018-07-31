import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enlighten',
  templateUrl: './enlighten.component.html',
  styleUrls: ['./enlighten.component.css']
})
export class EnlightenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goto(route: string) {
    this.router.navigate(['/', route]);
  }

}
