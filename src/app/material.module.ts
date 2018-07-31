import { NgModule } from "@angular/core";
import { FlexLayoutModule } from  '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
    FlexLayoutModule,
    MatToolbarModule, MatListModule, MatSidenavModule,
    MatIconModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule { }