import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgcComponentsLibModule } from 'ngc-components-lib';
import { DemoNgcSelectComponent } from './demo-ngc-select/demo-ngc-select.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoNgcSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgcComponentsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
