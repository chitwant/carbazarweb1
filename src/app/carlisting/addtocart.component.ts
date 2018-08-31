import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  email; string;
  message: string;
  constructor(private carService: CarService) {}

  ngOnInit() {

    this.email = localStorage.getItem('email');
    this.carService.sendEmailforprice()
    .subscribe((res: any) => {
      debugger;
      this.message = res.message;
     });
  }

}
