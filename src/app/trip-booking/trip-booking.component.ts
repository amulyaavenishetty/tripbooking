import { Component } from '@angular/core';
import { Tripbooking } from '../tripbooking';
import { TboperationsService } from '../tboperations.service';
import { TripService } from '../trip.service';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { ViewBookComponent } from '../view-book/view-book.component';

@Component({
  selector: 'app-trip-booking',
  templateUrl: './trip-booking.component.html',
  styleUrls: ['./trip-booking.component.css']
})
export class TripBookingComponent {
  t : Tripbooking = new Tripbooking('','','22-2-2023,12.30','22-2-2023,1.30',true,8,100);
  allTrips : Array<Tripbooking> = [];
  router:Router;

  
constructor(private tripService:TboperationsService,router:Router,private activatedRouter:ActivatedRoute)
  {
    this.tripService = tripService;
    this.allTrips = this.tripService.getTripArr();
    this.router = router;
   } 

   /**
    * constructor(private activatedRouter:ActivatedRoute,   
    *  private insService:InstructorServiceService,   
    *  private router:Router) { }
    */

ngOnInit(): void {
  }

  submitForm()
  {
    console.log("form submit button clicked");
    console.log(this.t);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    let toDateTime = new Date();
    let todayDate:Date = new Date();
    let stringDate:string = todayDate.getFullYear()+''+todayDate.getMonth()+''+todayDate.getDay()+''+todayDate.getHours();
    console.log("t  "+stringDate+"");
    



    this.tripService.createTrip(this.t,1,4).subscribe(
      data=>{
        console.log("Data Saved !!" +data);        
      },
      error=>{
        console.log(error);
        
      }
     
    )
    //this.router.navigate(['view - book']);
  }

  doThis()
  {
    this.router.navigate(['view - book']);
  }
}  
  

/*
 constructor(tripService:TboperationsService,router:Router)
  {
    this.__tripService = tripService;
    this.allTrips = this.__tripService.getTripArr();
    this.router = router;
    console.log(this.allTrips.length);
  }
 
  addTrip(fromLocation:string,toLocation:string)
  {
    console.log(" "+fromLocation+" "+toLocation+" ");
    let tripFromUser:Tripbooking = new Tripbooking(0,fromLocation,toLocation,'','',true,0,0);
    this.__tripService.addTrip(tripFromUser);
    console.log("submit button clicked");
    console.log(tripFromUser);
  }
*/

