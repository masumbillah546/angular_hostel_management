
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent{





constructor(
      private _empService:EmpService,
      private router: Router
     ) { }
	model:any={};
    getlog:any;
   

    // ngOnInit() {
    //   this.validation();
    // }

  

  regiSystem(){
        this._empService
          .regiSystem(this.model.name, this.model.email, this.model.password)
          .subscribe(()=> this.goBack());
          
  }
   goBack(){
    this.router.navigate(['/login']);
  
  }
   //        .subscribe(students => {
   //          this.getlog = students; 
   //          const redirect = this._empService.redirectUrl ? this._empService.redirectUrl : '/login';
			// this.router.navigate([redirect]);
   //      	});

       

   //  }



}







// angForm: FormGroup;
// constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
// this.angForm = this.fb.group({
// email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
// password: ['', Validators.required],
// name: ['', Validators.required],
// mobile: ['', Validators.required]
// });
// }

// ngOnInit() {
// }

// postdata(angForm1)
// {
// this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password)
// .pipe(first())
// .subscribe(
// data => {
// this.router.navigate(['login']);
// },

// error => {
// });
// }

// get email() { return this.angForm.get('email'); }
// get password() { return this.angForm.get('password'); }
// get name() { return this.angForm.get('name'); }
// }
