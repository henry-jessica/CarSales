import { Component, Input, OnInit } from '@angular/core';
import { CarApiService } from '../../service/car-api-service';
import { ICar, Car } from '../../interfaces/car';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  @Input() show?: boolean; 
  @Input() carData?: any; 
  @Input() button1?: string; 
  @Input() button2?: string;
  @Input() button3?: string; 

  constructor(private _carAPIService:CarApiService) { }

 
  ngOnInit(): void {
  }

  getEventClick(make: string, model: string, year: string, imageUrl: string): boolean{
    if (!this.carData)
      this.addTheCar(make, model, year, imageUrl); 
    else
      this.updateCar(make, model, year, imageUrl); 
    return false;
}
    addTheCar(make: string, model: string, year: string, imageUrl: string): boolean{
    let tempCar: ICar; 
    tempCar = new Car(make, model, year, imageUrl); 
    this._carAPIService.addCarData(tempCar); 
    return false;
  }

  updateCar(make: string, model: string, year: string, imageUrl: string): boolean {
    
    this._carAPIService.editCar(this.carData?.id,make, model, year, imageUrl); 
      this.show = true; 
      return false;
    }
}
