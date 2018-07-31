import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  labels = [ 'Enlighten', 'Electricity', 'Car', 'Food', 'Air Travel' ]

  //Look for the reference sideMenu and inject into this class as MatSidenav
  @ViewChild('sideMenu') sideMenu: MatSidenav;

  //Inject in the router component / must have private
  constructor(private router: Router) { }

  toggleSideMenu() {
    this.sideMenu.toggle();
  }

  showItem(menuItem: string) {
    console.log('>>> selected: ', menuItem);
    this.sideMenu.close();
    this.router.navigate(['/', menuItem.toLocaleLowerCase() ])
  }
}
