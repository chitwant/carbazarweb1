import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-carlisting',
  templateUrl: './carlisting.component.html',
  styleUrls: ['./carlisting.component.css']
})
export class CarlistingComponent implements OnInit {
Cars: any[];
status = 'accepted';
yes = 'yes';
name: String;
  constructor(private carService: CarService, private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService ) { }
  ngOnInit() {
      this.spinner.show();
     this.carService.getCars()
    .subscribe(res => {
      this.spinner.hide();
      console.log(res);
      debugger;
      this.Cars = res.cars;
      this.name = res.cars.user.firstname + ' ' + res.cars.user.lastname;
      // this.Cars.name = this.name;
    }, err => {
      console.log(err);
    });

  }

}
