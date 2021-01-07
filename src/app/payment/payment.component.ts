import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { first } from 'rxjs/operators';
import { Student } from '../student';
//import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
      private _empService:EmpService,
      private router: Router
     ) { }
    students:any;
    model:any={};

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

    addPayment(){

      this._empService
          .addPayment(this.model.userId, this.model.transDate, this.model.paymentBy, this.model.transNo, this.model.amount, this.model.remark)
          .subscribe();


    }

    
  id=localStorage.getItem('token');
     goBack(){

       if(this.id!="admin"){
         this.router.navigate(['/smaster/single-view/'+1258035]);
       }else{
         this.router.navigate(['/dashboard/payment-view']);
       }
    
  }
 

}
