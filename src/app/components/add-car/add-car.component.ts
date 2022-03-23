import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../../service/car-api-service';
import { ICar, Car} from '../../interfaces/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  show: boolean = true;
  constructor(private _carAPIService:CarApiService) { }
  ngOnInit(): void {
  }
  addTheCar(make: string, model: string, year: string, imageUrl: string): boolean{
    let tempCar: ICar; 
    tempCar = new Car(make, model, year, imageUrl); 
    this._carAPIService.addCarData(tempCar); 
    return false;
  }
}
