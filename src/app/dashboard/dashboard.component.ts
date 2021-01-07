import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

constructor(
  	  private _empService:EmpService,
      private router: Router
  	) { }

  sms:any;
  view:string="";
 

  ngOnInit() {

  	this.load_unseen();

  }

title = "Hostel Management System";
name = localStorage.getItem('token');


  logout(){
  localStorage.removeItem('token');
  }

 yes(){
 this._empService
 .load_unseen_notification("yes")
 .subscribe();
  }

load_unseen(){

       this._empService
          .load_unseen_notification(this.view)
          .subscribe(sms => {
            this.sms = sms;
           //alert(this.sms[0].unseen_notification)
            //alert(this.sms.notification[1][3])
        } )
    }


}
