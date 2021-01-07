import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmasterComponent } from './smaster.component';
import { AdmissionComponent } from '../admission/admission.component';

const routes: Routes = [
 
  //{path: '', component:SmasterComponent},
  {path: 'admission', component:AdmissionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmasterRouting { }