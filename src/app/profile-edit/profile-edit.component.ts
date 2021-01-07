import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EmpService } from '../emp.service';
import { Student } from '../student';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
      this.getSingleStudent();
  }

  //model:any={};
  model = new Student();
  id = this.route.snapshot.params['id'];
  getSingleStudent(){
    
    this.empService
      .getStudent(this.id)
      .subscribe(student =>{
          this.model = student[0];
          })
  };
  
  updateStudent(){
      this.empService
        .updateStudent(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/dashboard/student-list']);
  }

}
