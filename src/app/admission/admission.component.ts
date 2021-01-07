import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Student } from '../student';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Student();
   addStudent(){
      this.empService
        . addStudent(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
     if(localStorage.getItem('token')){
           this.router.navigate(['dashboard/student-list']);

         }else{
    this.router.navigate(['']);
    alert("Admission Succecful !!!")

         }
  }

}
