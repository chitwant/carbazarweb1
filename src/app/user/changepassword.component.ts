import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  email = {};

  public registerUserData = { oldpassword: '', password: ''};

  constructor(private _user: UserService, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

  ngOnInit() {
  }
  // register service
  changePassword() {
    this.spinner.show();
    debugger;
    this.email = localStorage.getItem('email');
    this._user.changePassword(this.email, this.registerUserData )
      .subscribe(res => {
        this.spinner.hide();
        debugger;
        console.log(res);
        if (res.status === 'Success') {
          this.toastr.success(res.message);
          console.log(res.status);
         this.router.navigate(['/userprofile']);
         // return false;
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        console.log(err);
      });
}

}
