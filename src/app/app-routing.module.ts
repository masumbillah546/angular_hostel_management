import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentComponent } from './home-page/content/content.component';





import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { AdmissionComponent } from './admission/admission.component';
import { SmasterComponent } from './smaster/smaster.component';
import { PanelComponent } from './panel/panel.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddComponent2 } from './meals/add/add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PaymentComponent } from './payment/payment.component';
import { HostelCostComponent } from './hostel-cost/hostel-cost.component';
import { CostViewComponent } from './cost-view/cost-view.component';
import { MealViewComponent } from './meal-view/meal-view.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SingleViewComponent } from './payment-view/single-view/single-view.component';




const routes: Routes = [
  //{path:"", redirectTo:"/home", pathMatch:"full"},
   
  //{path:"", component:LoginComponent},
  //{path:"login", component:LoginComponent},

  {path:"content", component:ContentComponent},
 //{path:"home2", component:HomePageComponent},
  {path:"", component:HomePageComponent, children:[

  {path:"", component:ContentComponent},
  {path:"content", component:ContentComponent},
  {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
  {path:"admission", component:AdmissionComponent},







  ]},
  {path:'admission', component:AdmissionComponent},


  //{path:"", component:DashboardComponent},
  {path:"dashboard", component:DashboardComponent, 

  children:[

   {path:"", component:PanelComponent},
    {path:"panel", component:PanelComponent}, 

  {path:'admission', component:AdmissionComponent},
  {path:'student-list', component:StudentListComponent},
  {path:'meal-add', component:AddComponent2},
  {path:"home", component:HomeComponent},
  
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:"employee", component:EmployeeListComponent},
  //{path:"login", component:LoginComponent},
  {path:"payment", component:PaymentComponent},
  {path:"hostel-cost", component:HostelCostComponent},
  {path:"cost-view", component:CostViewComponent},
  {path:"meal-view", component:MealViewComponent},
  {path:"payment-view", component:PaymentViewComponent},
  {path:"profile-edit/:id", component:ProfileEditComponent},
  {path:"single-view/:id", component:SingleViewComponent},




  ]},

   
   {path:'smaster', component:SmasterComponent, children:[
   {path:"payment", component:PaymentComponent},
   {path:"profile/:id", component:ProfileComponent},
   {path:"payment-view", component:PaymentViewComponent},
   {path:"single-view/:id", component:SingleViewComponent},
   {path:'', component:SdashboardComponent},

   ] },
  // {path:'admission', component:AdmissionComponent},
  // {path:'student-list', component:StudentListComponent},
  // {path:'meal-add', component:AddComponent2},
  // {path:"home", component:HomeComponent},
  
  // {path:"add", component:AddComponent},
  // {path:"edit/:id", component:EditComponent},
  // {path:"show/:id", component:ShowComponent},
  // {path:"profile/:id", component:ProfileComponent},
  // {path:"employee", component:EmployeeListComponent},
  // {path:"login", component:LoginComponent},
  // {path:"payment", component:PaymentComponent},
  // {path:"hostel-cost", component:HostelCostComponent},

 // children: [
 //      { path: '', redirectTo: 'overview', pathMatch: 'full' },
 //      { path: 'overview', component: Overview },
 //      { path: 'specs', component: Specs }
 //    ]

  //{path:"panel", component:PanelComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
