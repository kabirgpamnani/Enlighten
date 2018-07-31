import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//AppComponent is part of the generated code
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { EnlightenComponent } from './components/enlighten.component';
import { AppRouteModule } from './approute.module';
import { ElectricityComponent } from './components/electricity.component';

@NgModule({
  declarations: [
    AppComponent,
    EnlightenComponent,
    ElectricityComponent
  ],
  //Imports all exported components @NgModule({ exports: [ ... ]})
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule,
    MaterialModule, AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
