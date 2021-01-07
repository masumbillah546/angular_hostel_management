import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent2 implements OnInit {

  constructor(private _service:EmpService) { }
	meals:any={};
  	students:any;
  ngOnInit() {

  	this.getStudentList();
  }

  

  addMeal(){

  	this._service
  	.addMeal(this.meals.id, this.meals.meal)
  	.subscribe()

  }

  getStudentList(){
       this._service
          .getStudentList()
          .subscribe(students => {
            this.students = students;
        } )
    }


}
