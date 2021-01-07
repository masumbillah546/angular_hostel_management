import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Student } from '../../student';
//import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


sms:any={};
name =localStorage.getItem('token');

  constructor( 
  	private service:EmpService,
  	private router:Router

  	) { }

  ngOnInit(){

  }



	 sand_sms(){

  	this.service
  	.sand_sms(this.sms.name, this.sms.subject, this.sms.dis)
  	.subscribe()
}

goBack(){


			alert("Messege set successfully");
	 //this.router.navigate(['']);
	}

}


