import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../../service/car-api-service';
import { ICar, Car} from '../../interfaces/car';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers:[CarApiService],
})
export class CarlistComponent implements OnInit {
 
    carsData?: ICar[];
  constructor(private _carAPIService:CarApiService) { }

  ngOnInit(): void {
    this._carAPIService.getCarData().subscribe(carsData =>
      { this.carsData = carsData }); 
  }

}
