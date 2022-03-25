import { Component, Input, OnInit } from '@angular/core';
import { Car, ICar } from 'src/app/interfaces/car';
import { CarApiService } from 'src/app/service/car-api-service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  @Input() carData?: any; 
  @Input() isEdit?: boolean; 
 constructor(private _carAPIService: CarApiService) { }

  ngOnInit(): void {
  }
     updateCar(make: string, model: string, year: string, imageUrl: string): boolean {

    this._carAPIService.editCar(this.carData?.id,make, model, year, imageUrl); 
      this.isEdit = true; 
      return false;
    }
}
