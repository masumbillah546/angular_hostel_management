import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
//import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }



constructor(
    private _empService:EmpService,
    private router: Router
   ) { }
  employees2:any;
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
     this._empService
        .getEmployees()
        .subscribe(employees_f => {
          this.employees2 = employees_f;
      } )
  }
  deleteEmployee(id){
      this._empService
        .deleteEmployee(id)
        .subscribe(() => {
        this.getEmployees();
      } )
  }




}
