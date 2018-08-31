import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
// import { Pipe, PipeTransform } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-usercarlisting',
  templateUrl: './usercarlisting.component.html',
  styleUrls: ['./usercarlisting.component.css']
})
export class UsercarlistingComponent implements OnInit {
  status = 'accepted';
  yes = 'yes';
  Carlisting: any[];
  userid = {};
  regno = {};
  name = {};
  s: any = 'searchitem';
  constructor( private userService: UserService,
    private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

 ngOnInit() {
  this.name = localStorage.getItem('firstname') ;
  this.userid = localStorage.getItem('_id');
    this.userService.getCarUserList(this.userid)
    .subscribe((res: any) => {
      this.Carlisting = res.cars;
      debugger;
      console.log( this.Carlisting);
     });

  }

  deletecarbyuser(regno) {
     debugger;
    this.userService.deleteCarbyuser(regno)
    .subscribe(res => {
      this.spinner.hide();
      debugger;
      console.log(res);
      if (res.status === 'Success') {
        this.toastr.success(res.message);
        console.log(res.status);
       this.router.navigate(['/userlisting']);
       // return false;
      } else {
        this.toastr.error(res.message);
      }
    }, err => {
      console.log(err);
    });

 }

}
