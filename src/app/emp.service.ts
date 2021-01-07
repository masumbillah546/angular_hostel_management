import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Users } from './users';

@Injectable()
export class EmpService {


  constructor(private _http:Http) { }
  checkMe:any;
  redirectUrl: string;


//Employee Service
  getEmployees(){
    return this._http.get("http://localhost/angular2_crud/api/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }


  addEmployee(info){
    return this._http.post("http://localhost/angular2_crud/api/insert.php",info)
      .map(()=>"");
  }
  getEmployee(id){
    return this._http.post("http://localhost/angular2_crud/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteEmployee(id){
    return this._http.post("http://localhost/angular2_crud/api/delete.php/",{'id':id})
      .map(()=>this.getEmployees());
  }
  updateEmployee(info){
    return this._http.post("http://localhost/angular2_crud/api/update.php/", info)
      .map(()=>"");
  }


//Student Service

 addStudent(info){
    return this._http.post("http://localhost/angular2_crud/api/addStudent.php",info)
      .map(()=>"");
  }
  getStudent(id){

    return this._http.post("http://localhost/angular2_crud/api/student_info.php/",{'id':id})
      .map(res=>res.json());

  }

   getStudentList(){

    return this._http.get("http://localhost/angular2_crud/api/student_list.php/")
      .map(res=>res.json());

  }


  deleteStudent(id){

    return this._http.post("http://localhost/angular2_crud/api/student_delete.php/",{'id':id})
      .map(()=>this.getStudentList());
  }

  updateStudent(info){
    return this._http.post("http://localhost/angular2_crud/api/update_student.php/", info)
      .map(()=>"");
  }




//login Service

  loginSystem(email, password){

    // return this._http.post("http://localhost/angular2_crud/api/login.php/",{email,password})
    //   .map(res=>res.json());

      return this._http.post("http://localhost/angular2_crud/api/login.php/",{email,password})
      .map(res=>{
        this.setToken(res.json()[0].name);
         return res.json()
        
       
      });

  }

  getLog(){

    return this._http.get("http://localhost/angular2_crud/api/getlog.php/")
      .map(res=>res.json());

  }


  regiSystem(name, email, password){

    return this._http.post("http://localhost/angular2_crud/api/register.php/",{name, email,password})
      .map(()=>"");

  }

  
//Meal Service
  addMeal(id, meal){
        return this._http.post("http://localhost/angular2_crud/api/add_meal.php",{id, meal})
      .map(()=>"");
  }

  getMeal(){
        return this._http.get("http://localhost/angular2_crud/api/get_meal.php")
      .map(()=>"");
  }

//payment Service


addPayment(userId, transDate, paymentBy, transNo, amount, remark){

    return this._http.post("http://localhost/angular2_crud/api/add_payment.php/",{userId, transDate, paymentBy, transNo, amount, remark})
      .map(res=>res.json());

  }



getPayment(){

    return this._http.get("http://localhost/angular2_crud/api/get_payment.php/")
      .map(res=>res.json());

  }

  singleView(id){

    return this._http.post("http://localhost/angular2_crud/api/get_single_view.php/",{'id':id})
      .map(res=>res.json());

  }


    //sms
  //   sandSms(id, name, sms){
  //   return this._http.post("http://localhost/angular2_crud/api/sand_sms.php",{id, name ,sms})
  //     .map(()=>"");
  // }

   receiveSms(){

    return this._http.get("http://localhost/angular2_crud/api/receive_sms.php/")
      .map(res=>res.json());

  }

  load_unseen_notification(view){

     return this._http.post("http://localhost/angular2_crud/api/receive_sms.php",{view})
      .map(res=>res.json());
 
  }


  sand_sms(name, subject, dis){

    return this._http.post("http://localhost/angular2_crud/api/sand_sms.php/",{name, subject,dis})
      .map(()=>"");

  }

  //notice
   notice2(){
        return this._http.get("http://localhost/angular2_crud/api/notice.php")
      .map(res=>res.json());
  }



  //Token
  //token
  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }

    return false;

  }







} //EmpService class end;
