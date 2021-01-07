import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Payment } from '../../payment';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
    this.getSingleView();
  }
  students:any;
  getSingleView(){
    var id = this.route.snapshot.params['id'];
    this.empService
      .singleView(id)
      .subscribe(students =>{
          this.students = students;
          })
  };

}
