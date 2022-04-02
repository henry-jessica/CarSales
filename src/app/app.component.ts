import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarSales';
  show!: boolean;
  displaySucessMessage: boolean=false;
  
  cancel(){
    this.show = false; 
  }
  confirm(){
    this.show=false; 
    this.displaySucessMessage=true; 
  }

}
