import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CabComponent } from './cab/cab.component';
import { DriverComponent } from './driver/driver.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TripBookingComponent } from './trip-booking/trip-booking.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


const allLinks:Routes = [
   {path:'bookyourride',component:TripBookingComponent},
   {path:'cab',component:CabComponent},
   {path:'Viewtripdetails',component:SampleComponent},
   //{path:'cabDetail/:cid',component:CabDetailComponent},  
   {path:'viewCabDetails',component:CabComponent},
   {path:'home',component:HomepageComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'admin/:name',component:Page2Component}
  ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CabComponent,
    DriverComponent,
    HeaderComponent,
    HomepageComponent,
    TripBookingComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    SampleComponent,
    ViewBookComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
