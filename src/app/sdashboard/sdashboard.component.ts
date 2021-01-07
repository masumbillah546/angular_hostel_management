import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Student } from '../student';
//import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent implements OnInit {
notice:any;
sms:any={};
name =localStorage.getItem('token');

  constructor( 
  	private service:EmpService,
  	private router:Router

  	) { }

  ngOnInit(){



  	this.noticeBoard();

  }


	noticeBoard(){

		this.service
		.notice2()
		.subscribe(notice => {
            this.notice = notice;
            //alert(this.notice)
        })

	}

	 sand_sms(){

  	this.service
  	.sand_sms(this.name, this.sms.subject, this.sms.dis)
  	.subscribe()
}

goBack(){


			alert("Messege set successfully");
	 //this.router.navigate(['']);
	}

}
