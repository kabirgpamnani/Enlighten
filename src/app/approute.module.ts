import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { EnlightenComponent } from './components/enlighten.component';
import { ElectricityComponent } from './components/electricity.component';
import { CarComponent} from './components/car.component';
import { EtotalsComponent } from './components/etotals.component';
import { ReduceOrReplenishComponent } from './components/reduce-or-replenish.component';

const APPROUTE: Routes = [
    { path: "", component: EnlightenComponent },
    { path: "enlighten", component: EnlightenComponent },
    { path: "electricity", component: ElectricityComponent },
    { path: "car", component: CarComponent},
    //Need to add routes here 
    { path: "etotals", component: EtotalsComponent },
    { path: "ReduceOrReplenish", component: ReduceOrReplenishComponent },

    //Last line
    { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(APPROUTE) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }