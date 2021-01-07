
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent {

constructor(
      private _empService:EmpService,
      private router: Router
     ) { }
	model:any={};
    getlog:any;
   

    ngOnInit() {
     //localStorage.setItem("name",this.getlog[0].name);
     //sessionStorage.setItem("email","masumbillah546@gmail.com");
    }

  

  loginSystem(){
        this._empService
          .loginSystem(this.model.email, this.model.password)
          .subscribe(students => {
            this.getlog = students; 
            if(this.getlog[0].name=="admin"){
            	 const redirect = this._empService.redirectUrl ? this._empService.redirectUrl : '/dashboard';
				this.router.navigate([redirect]);
            }else{
            	 const redirect = this._empService.redirectUrl ? this._empService.redirectUrl : '/smaster';
				this.router.navigate([redirect]);
            }
           
        	}, 

        	error => {
			alert("User name or password is incorrect");
			} );

       

    }


}

// export class LoginComponent implements OnInit {

	// angForm2: FormGroup;

	// constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {

	// 	this.angForm2 = this.fb.group({
	// 		email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
	// 		password: ['', Validators.required]
	// 	});

	// }

	// ngOnInit() {
	// }


	// postdata(angForm1){

	// 	this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
	// 	.pipe(first())
	// 	.subscribe(
	// 		data => {

	// 			const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
	// 			this.router.navigate([redirect]);

	// 		},

	// 		error => {
	// 		alert("User name or password is incorrect");
	// 		}

	// 	);

	// }

	// get email() { return this.angForm2.get('email'); }
	// get password() { return this.angForm2.get('password'); }


// }
