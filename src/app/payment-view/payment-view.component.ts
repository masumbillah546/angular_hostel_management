import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.css']
})
export class PaymentViewComponent implements OnInit {

  constructor(private _service:EmpService, private router: Router) { }
students:any;
students2:any={};
  ngOnInit() {

  	this.getPayment();
  }


  paymentViewRequest(){
  	this.goBack();
  }

   getPayment(){
       this._service
          .getStudentList()
          .subscribe(students => {
            this.students = students;
        } )
           
    }

    goBack(){
    this.router.navigate(['/dashboard/single-view/'+this.students2.id]);
  }

}
