import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgcSelectComponent } from './demo-ngc-select/demo-ngc-select.component';


const routes: Routes = [
  {  path: '', redirectTo: '/demongcselect', pathMatch: 'full'}, 
  {  path: 'demongcselect', component: DemoNgcSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
