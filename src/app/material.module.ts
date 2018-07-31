import { NgModule } from "@angular/core";
import { FlexLayoutModule } from  '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
    FlexLayoutModule,
    MatToolbarModule, MatListModule, MatSidenavModule,
    MatIconModule, MatInputModule, MatFormFieldModule,
    MatButtonModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule { }