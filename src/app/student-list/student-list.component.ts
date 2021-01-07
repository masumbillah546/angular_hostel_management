import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
import { Student } from '../student';
//import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(
      private _empService:EmpService,
      private router: Router
     ) { }
    students:any;
    ngOnInit() {
      this.getStudentList();
    }
    getStudentList(){
       this._empService
          .getStudentList()
          .subscribe(students => {
            this.students = students;
        } )
    }

  deleteStudent(id){
        this._empService
          .deleteStudent(id)
          .subscribe(() => {
          this.getStudentList();
        } )
    }
}
