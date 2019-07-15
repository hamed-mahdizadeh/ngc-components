import { NgModule } from '@angular/core';
import { NgcComponentsLibComponent } from './ngc-components-lib.component';
import { NgcSelectComponent } from './ngc-select/ngc-select.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgcComponentsLibComponent, NgcSelectComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [NgcSelectComponent]
})
export class NgcComponentsLibModule { }
