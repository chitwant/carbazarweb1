import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   public registerUserData = { firstname: '' , lastname: '' , email: '', password: '' , confirmPassword: '' };

  constructor(private _user: UserService, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

  ngOnInit() { }
  // register service
  registerUser() {
    debugger;
    this.spinner.show();
    this._user.registerUser(this.registerUserData)
      .subscribe(res => {
        this.spinner.hide();
        console.log(res);
        debugger;
        this.registerUserData = res.users;
        if (res.status === 'Success') {

          this.toastr.success(res.message);
          this.router.navigate(['/registerSucess']);
          return false;
        } else {

       this.toastr.error('Email already Exist!!');

        }
      }, err => {
        console.log(err);

      });
  }



}

