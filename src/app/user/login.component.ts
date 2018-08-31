import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData = { email: '', password: ''};
  constructor(private dataservice: DataService,
  private _user: UserService, private router: Router , private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

  ngOnInit() { }
  loginUser() {
    this.spinner.show();
    this._user.loginUser(this.loginUserData)
    .subscribe(res => {
      this.spinner.hide();
      this.dataservice.setUserStauts(true);
      console.log(res);
     debugger;
      if (res.auth === true) {
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('_id', res.user._id);
        localStorage.setItem('firstname', res.user.firstname);
        localStorage.setItem('lastname', res.user.lastname);
        localStorage.setItem('userToken', res.user.token);
        this.loginUser = res.users;
        this.toastr.success(res.message);
         this.router.navigate(['usercarlisting']);
        return false;
      }
      if (res.auth === false) {
        this.toastr.error(res.msg);
      }
    }, err => {
      console.log(err);
    });
  }
}
