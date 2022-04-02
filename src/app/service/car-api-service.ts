import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { ICar } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
  
export class CarApiService {  
  //service wrapper around the native firestore SDK's 
  //CollectionReference and Query types.
  carsDataCollection!: AngularFirestoreCollection<ICar>; 

  //representation of any set of cars over any amount of time
  carsData!: Observable<ICar[]>;

  //array to hold all cars
  allCarsData!: ICar[]; 
  

  errorMessage!: string; 
  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    //Conect to the database
    this.carsDataCollection = _afs.collection<ICar>("cars_data"); 
  }

  MakeCarList=[
          {id:1, title:'Acura'},
          {id:2, title:'Alfa'},
          {id:3, title:'Audi'},
          {id:4, title:'BMW'},
          {id:5, title:'Ford'},
          {id:6, title:'Honda'},
          {id:7, title:'Jeep'},
          {id:8, title:'Nissan'},
          {id:9, title:'Honda'},
          {id:10, title:'Jeep'},
          {id:11, title:'Mazda'},
          {id:12, title:'Tesla'},
          {id:13, title:'Toyota'},
          {id:14, title:'Volkswagen'},
          {id:15, title:'Volvo'},
          {id:15, title:'Mercedes'},
  ];

getCarmake(){
  return this.MakeCarList; 
}
  getCarData(): Observable<ICar[]>{
    this.carsData = this.carsDataCollection.valueChanges({idField:'id'}); 
    this.carsData.subscribe(
      data=>console.log("getCarsData"+JSON.stringify(data))
    )
    return this.carsData; 
  }

 addCarData(car: ICar): void{
    this.carsDataCollection.add(JSON.parse(JSON.stringify(car))); 
      }
  
 delCarData(carId: string): void{
    this.carsDataCollection.doc(carId).delete(); 
}
  editCar(carId: string, make:string, model:string, year:string, imageUrl:string, price:string, description:string): void{
    this.carsDataCollection.doc(carId).update({make: make, model:model, year:year, imageURL:imageUrl, price:price, description:description});
  }

  private handleError(err: HttpErrorResponse) {
    console.log('CarApiService' + err.message); 
    return Observable.create(err.message); 
  }
}


