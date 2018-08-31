import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CompileShallowModuleMetadata } from '../../../node_modules/@angular/compiler';
@Component({
  selector: 'app-car-accept',
  templateUrl: './car-accept.component.html',
  styleUrls: ['./car-accept.component.css']
})
export class CarAcceptComponent implements OnInit {
  reg_id: string;
  status: string;
  userid: String;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, private toastr: ToastrService,
    private spinner: NgxSpinnerService) {}
    regid: any;
  ngOnInit() {
    this.spinner.show();
    debugger;
    this.route.queryParams.subscribe(params => {
      debugger;
        const body = {
       registration_no: params['regid'],
      name: params['name'],
      email: params['email'],
      customerid: params['customerid']
        };
    this.carService.carAccept(body)
         .subscribe((res: any) => {
          this.spinner.hide();
     // console.log(res);
      // debugger;
       if (res.status === 'Success') {
        debugger;
        this.toastr.success(res.message);
        this.status = res.status;
      } else {
        this.toastr.error(res.message);

      }
    }, err => {
      debugger;
      console.log(err);
    });
  });
  }




}
