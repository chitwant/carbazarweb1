import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  car: Car;
  previewPhoto = false;
  registerCar = { };
  _id = {};
  userid = {};
  selectedFile: any = [];

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService, private _http: HttpClient ) { }

  ngOnInit() {
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
onUpload() {
  debugger;
  const regid = this.route.snapshot.paramMap.get('regid');
  // this.http is the injected HttpClient
  const uploadData = new FormData();
   uploadData.append('photos', this.selectedFile, this.selectedFile.name);
  console.log( this.selectedFile.name);
  debugger;
  this._http.put('http://localhost:3000/cars/imageUplaod/' + regid, uploadData)
  .subscribe((res: any) => {
    console.log(res);
    debugger;
     if (res.status === 'Success') {
      this.spinner.hide();
      this.toastr.success(res.message);
    //  this.router.navigate(['imageupload']);
      this.router.navigate(['usercarlisting']);
      return false;
    } else {
      this.toastr.error(res.message);
    }
  }, err => {
    debugger;
    this.spinner.hide();
    console.log(err);
  });
}




}
