import { Component, Input, OnInit } from '@angular/core';
import { ICar, Car} from '../../interfaces/car';
import { CarApiService } from '../../service/car-api-service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],

})
export class CarComponent implements OnInit {
  @Input() carData?: any; 
  carImageWidth: number = 300; 
  carsData?: ICar[];
  isEdit?: boolean; 
  constructor(private _carAPIService: CarApiService) { }
  
  ngOnInit(): void {
  }
  deleteCar() {
    console.log(this.carData);
    this._carAPIService.delCarData(this.carData.id); 
    return false;
  }

  updateCar(make: string, model: string, year: string, imageUrl: string): boolean {
    let tempCar: ICar; 
     tempCar = new Car(make, model, year, imageUrl); 
    this._carAPIService.editCar(this.carData?.id,make, model, year, imageUrl); 
      this.isEdit = true; 
      return false;
    }
}
