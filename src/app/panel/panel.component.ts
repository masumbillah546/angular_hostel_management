import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import * as $ from "jquery";


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(){
  
  }

 date: Date = new Date();  
//date=new Date().toLocaleString()





  goBack(){
    this.router.navigate(['/dashboard/employee']);
  }
   goBack2(){
    this.router.navigate(['/dashboard/student-list']);
  }



}
