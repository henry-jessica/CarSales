import { Component, Input, OnInit } from '@angular/core';
import { ICar} from '../../interfaces/car';
import { CarApiService } from '../../service/car-api-service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],

})
export class CarComponent implements OnInit {
  @Input() carData!: any; 
  carImageWidth: number = 300; 
  carsData!: ICar[];
  constructor(private _carAPIService: CarApiService) { }
  
  ngOnInit(): void {
  }
  deleteCar() {
    console.log(this.carData);
    this._carAPIService.delCarData(this.carData.id); 
    return false;
    }
}
