import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-smaster',
  templateUrl: './smaster.component.html',
  styleUrls: ['./smaster.component.css']
})
export class SmasterComponent implements OnInit {

 constructor(
      private _empService:EmpService
   
     ) { }

  ngOnInit() {
console.log(this.name);

  }

 name = localStorage.getItem('token');
 

  logout(){
  localStorage.removeItem('token');
  }

  

}
