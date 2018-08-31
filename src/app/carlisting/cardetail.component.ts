import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  CarId: any;
  id: string;
  log: Boolean = false;
  ownername: {};
  owneremail: {};
  customername: {};
  customeremail: {};
  customerid: {};
  carownerid: String;
 constructor(private route: ActivatedRoute, private toastr: ToastrService,
   private spinner: NgxSpinnerService, private carService: CarService, private router: Router) {}

 ngOnInit() {
  if (localStorage.getItem('userToken')) {
    this.log = true;
}
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.carService.getByCarId(this.id)
    .subscribe((res: any) => {
         debugger;
        this.CarId = res.cars;
        this.carownerid =  res.cars.user._id.toString();
        console.log(this.carownerid);
        this.CarId.carownerid = this.carownerid;
        this.ownername = res.cars.user.firstname + ' ' + res.cars.user.lastname;
        this.CarId.ownername = this.ownername;
        this.owneremail = res.cars.user.email;
        this.CarId.owneremail = this.owneremail;
        this.customername = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
        this.customeremail = localStorage.getItem('email');
        this.customerid = localStorage.getItem('_id');
        this.CarId.customername = this.customername;
        this.CarId.customeremail = this.customeremail;
        this.CarId.customerid = this.customerid;
        this.CarId.photos = res.cars.photos;
       // console.log(this.CarId.name);
       // console.log(res.cars.user.name);
       
     });
  }

// send user detail and car detail by email to admin
sendcardetail() {
  this.spinner.show();
  debugger;
  const body = {
    Registration_no: this.CarId.registration_no,
    Cost: this.CarId.cost,
    Manufacturer: this.CarId.manufacturer,
    Model: this.CarId.model,
    ownername: this.CarId.ownername,
    owneremail: this.CarId.owneremail,
    customername:  this.CarId.customername,
    customeremail:  this.CarId.customeremail,
    customerid:  this.CarId.customerid
  };
  this.carService.sendcardetail(body)
  .subscribe((res: any) => {
    console.log(res);
    debugger;
     if (res.status === 'Success') {
      this.spinner.hide();
      this.toastr.success(res.message);

      this.router.navigate(['addtocart']);
      return false;
    }
  }, err => {
    debugger;
    console.log(err);
  });
}


}


