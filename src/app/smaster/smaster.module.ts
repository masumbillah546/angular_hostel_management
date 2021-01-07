import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmasterRouting } from './smaster.routing';
//import { AdmissionComponent } from './admission.component';



@NgModule({
  // declarations: [AdmissionComponent],
  imports: [
    CommonModule,
    SmasterRouting
  ]
})
export class SmasterModule { }