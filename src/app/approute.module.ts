import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { EnlightenComponent } from './components/enlighten.component';
import { ElectricityComponent } from './components/electricity.component';

const APPROUTE: Routes = [
    { path: "", component: EnlightenComponent },
    { path: "enlighten", component: EnlightenComponent },
    { path: "electricity", component: ElectricityComponent },

    //Last line
    { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(APPROUTE) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }