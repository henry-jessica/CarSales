import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarApiService} from '../../service/car-api-service';
import { ICar, Car } from '../../interfaces/car';
import { importType } from '@angular/compiler/src/output/output_ast';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() show?: boolean; 
  @Input() carData?: any; 
  @Input() BtnName?: string; 
  @Input() title?: string; 
  @Output() cancel: EventEmitter<null> = new EventEmitter<null>();
  @Output() confirm: EventEmitter<null>=new EventEmitter<null>(); 
  
  MakeCarList?: any[];
  isValid?: boolean=true;
  standardImage:string="https://assets.donedeal.ie/assets/classifieds/images/motor/new-cars/photos/small/image-coming-soon.png"; 

  constructor(private _carAPIService:CarApiService) { }
  ngOnInit(): void {
  this.MakeCarList = this._carAPIService.MakeCarList; 
  }


  getEventClick(make: string, model: string, year: string, imageUrl: string, price:string, description:string): boolean{
    if(!imageUrl)
       imageUrl = this.standardImage; 
       if (!this.carData)
      this.addTheCar(make, model, year, imageUrl, price, description); 
    else{
       this.isValid=true; 
      this.updateCar(make, model, year, imageUrl, price, description); 
    }
    this.Confirm(); 
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
    Cancel() {
      this.cancel.emit();
    }
    Confirm(){
      this.confirm.emit(); 
    }
}
