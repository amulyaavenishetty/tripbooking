export class Tripbooking {
    
    fromLocation: string;
    toLocation: string;
    fromDateTime: string;
    toDateTime : string;
    status : boolean ;
    distanceInKm : number ;
    bill : number ;

constructor(

    
    fromLocation: string,
    toLocation: string,
    fromDateTime: string,
    toDateTime : string,
    status : boolean ,
    distanceInKm : number,
    bill : number,

    )
    {
        
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.fromDateTime=fromDateTime;
        this.toDateTime=toDateTime;
        this.status=status;
        this.distanceInKm=distanceInKm;
        this.bill=bill;

    }
}
