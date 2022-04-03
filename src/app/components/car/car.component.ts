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
  displayDeleteMessage?: boolean = false;
  constructor(private _carAPIService: CarApiService) { }
  
  ngOnInit(): void {
  }
  message() {
     this.displayDeleteMessage = true; 
     return false;
  }
  deleteCar(){
    console.log(this.carData);
    this._carAPIService.delCarData(this.carData.id); 
    return false;
  }

  updateCar(make: string, model: string, year: string, imageUrl: string, price:string, description:string): boolean {
    this._carAPIService.editCar(this.carData?.id,make, model, year, imageUrl, price, description); 
      this.isEdit = true; 
      return false;
    }
    cancel(){
      this.displayDeleteMessage=false; 
      this.isEdit = false; 
    }
    confirm(){
      this.isEdit = true; 
    }
    
}
