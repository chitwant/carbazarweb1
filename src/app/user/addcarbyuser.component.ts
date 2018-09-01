import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-addcarbyuser',
  templateUrl: './addcarbyuser.component.html',
  styleUrls: ['./addcarbyuser.component.css']
})
export class AddcarbyuserComponent implements OnInit {

  car: Car;
  previewPhoto = false;
  registerCar = { };
  _id = {};
  userid = {};
  regid = {} ;
  logo: any;
  fileToUpload: File = null;
  constructor(private carService: CarService, private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService ) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.car = {
      Registration_no: '',
      Manufacturer: '',
      Model: '',
      Speedometer: '',
      Cost: '',
      userid: localStorage.getItem('_id')
    };
}
handleFileInput(file: FileList) {
  debugger
  this.fileToUpload = file.item(0);

  // Show image preview
  const reader = new FileReader();
  reader.onload = (event: any) => {
    this.logo = event.target.result;
  };
  reader.readAsDataURL(this.fileToUpload);
}
saveCar() {
  this.spinner.show();
  this.carService.addCar(this.fileToUpload, this.car)
  .subscribe((res: any) => {
    console.log(res);
    debugger;
     if (res.status === 'Success') {
      this.spinner.hide();
      this.regid = res.cars.registration_no;
      this.toastr.success(res.message);
    //  this.router.navigate(['imageupload']);
      this.router.navigate(['usercarlisting/']);
      return false;
    } else {
      this.toastr.error(res.message.errmsg);
    }
  }, err => {
    debugger;
    this.spinner.hide();
    console.log(err);
  });
}



}
