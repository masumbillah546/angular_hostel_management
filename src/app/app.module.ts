import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
//import { FullCalendarModule } from '@fullcalendar/angular';
//import { AgmCoreModule } from '@agm/core';
//import { GoogleMapsModule } from '@angular/google-maps'


import { AppComponent } from './app.component';
import { NavbarComponent } from './ems/navbar/navbar.component';
import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { EmpService } from './emp.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionRouting } from './dashboard/drouting';
import { SmasterModule } from './smaster/smaster.module';
import { SmasterComponent } from './smaster/smaster.component';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { PanelComponent } from './panel/panel.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddComponent2 } from './meals/add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PaymentComponent } from './payment/payment.component';
import { HostelCostComponent } from './hostel-cost/hostel-cost.component';
import { CostViewComponent } from './cost-view/cost-view.component';
import { MealViewComponent } from './meal-view/meal-view.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SingleViewComponent } from './payment-view/single-view/single-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentComponent } from './home-page/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    DashboardComponent,
     LoginComponent,
     RegisterComponent,
    AdmissionComponent,
     SmasterComponent,
    SdashboardComponent,
    PanelComponent,
    StudentListComponent,
    AddComponent2,
    ProfileComponent,
    EmployeeListComponent,
    PaymentComponent,
    HostelCostComponent,
    CostViewComponent,
    MealViewComponent,
    PaymentViewComponent,
    ProfileEditComponent,
    SingleViewComponent,
    HomePageComponent,
    ContentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
     //FullCalendarModule
    //GoogleMapsModule
    //  AgmCoreModule.forRoot({
    //   apiKey: ''
    // })


    // AdmissionRouting
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
