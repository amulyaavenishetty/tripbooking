import { Injectable } from '@angular/core';
import { Tripbooking } from './tripbooking';
import { TripDto } from './trip-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TboperationsService {

  baseURL='http://localhost:2004';
  insertTrip:string=this.baseURL+'/api/tripbooking/register';
  allTripsByUser:string=this.baseURL+'/api/tripbooking/alltripsbyuser';
  allTrips:string=this.baseURL+'/api/tripbooking/alltrips';
  allTripsByDriver:string = this.baseURL+'/api/tripbooking/alltripsbydriver'

  constructor(private http:HttpClient) 
  {

  }

  tripArr:Tripbooking[] = [];

  addTrip(tripFromUser:Tripbooking)
  {
    this.tripArr.push(tripFromUser); 
    console.log("Inside booking Service : Trip Added "+tripFromUser);
    console.log(" Total Trips Are :- "+this.tripArr.length);

  }

  getTripArr():Tripbooking[]
  {
    return this.tripArr;
  }

  createTrip(tripbooking:Tripbooking,userId:number,driverId:number):Observable<TripDto[]>
  {
    console.log("Tripbooking service - create trip called");
    this.insertTrip = this.insertTrip+'/'+userId;
    console.log("After adding userId "+this.insertTrip);
    this.insertTrip = this.insertTrip+'/'+driverId;
    return this.http.post<TripDto[]>(`${this.insertTrip}`,tripbooking);
    
  }


  getAllTripsFromSpring():Observable<TripDto[]>
  {
    console.log("inside service : "+this.allTrips);
      return this.http.get<TripDto[]>(`${this.allTrips}`);
  }

  getAllTripsByUserFromSpring(userId:number):Observable<TripDto[]>
  {
    console.log("inside service : "+this.allTripsByUser);
    this.allTripsByUser=this.allTripsByUser+'/'+userId;
    console.log("After adding name 2 "+this.allTripsByUser);
    return this.http.get<TripDto[]>(`${this.allTripsByUser}`);
  }

  getAllTripsByDriverFromSpring(driverId:number):Observable<TripDto[]>
  {
    console.log("inside service : "+this.allTripsByDriver);
    this.allTripsByDriver=this.allTripsByDriver+'/'+driverId;
    console.log("After adding name 2 "+this.allTripsByDriver);
    return this.http.get<TripDto[]>(`${this.allTripsByDriver}`);
  }

  


 
}