import { Component, Input, OnInit } from '@angular/core';
import { CarApiService} from '../../service/car-api-service';
import { ICar, Car } from '../../interfaces/car';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() show?: boolean; 
  @Input() carData?: any; 
  @Input() BtnCallEvent?: string; 
  MakeCarList?: any[];
  constructor(private _carAPIService:CarApiService) { }
  ngOnInit(): void {
  this.MakeCarList = this._carAPIService.MakeCarList; 
  }


  getEventClick(make: string, model: string, year: string, imageUrl: string, price:string, description:string): boolean{
    if (!this.carData)
      this.addTheCar(make, model, year, imageUrl, price, description); 
    else
      this.updateCar(make, model, year, imageUrl, price, description); 
    return false;
}
    addTheCar(make: string, model: string, year: string, imageUrl: string, price:string, description:string): boolean{
    let tempCar: ICar; 
    tempCar = new Car(make, model, year, imageUrl, price, description); 
    this._carAPIService.addCarData(tempCar); 
    console.log(this.MakeCarList);
    return false;
  }

  updateCar(make: string, model: string, year: string, imageUrl: string, price:string, description:string): boolean {
    
    this._carAPIService.editCar(this.carData?.id,make, model, year, imageUrl, price, description); 
      this.show = true; 
      return false;
    }
}
