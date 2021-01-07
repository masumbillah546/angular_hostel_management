import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
//import { Employee } from '../employee';
import { Student } from '../student';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


//  constructor(
//     private _empService:EmpService,
//     private router: Router
//    ) { }
//   students:any;
//   ngOnInit() {
//     this.getStudent();
//   }
//   getStudent(){
//      this._empService
//         .getStudent()
//         .subscribe(students => {
//           this.students = students;
//       } )
//   }

// name="Masum";



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
    this.getSingleStudent();
  }
  student:Student;
  getSingleStudent(){
    var id = this.route.snapshot.params['id'];
    this.empService
      .getStudent(id)
      .subscribe(students =>{
          this.student = students[0];
          })
  };

  // goBack(){
  //   this.router.navigate(['/student-list']);
  // }



}
