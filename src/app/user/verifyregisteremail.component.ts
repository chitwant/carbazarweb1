import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-verifyregisteremail',
  templateUrl: './verifyregisteremail.component.html',
  styleUrls: ['./verifyregisteremail.component.css']
})
export class VerifyregisteremailComponent implements OnInit {
  email = {};
  status = {};
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinner.show();
    const body = {
      name: localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname'),
      email: localStorage.getItem('email')
    };
    this.email = this.route.snapshot.paramMap.get('email');
    this.userService.verfyUserEmail(this.email, body)
    .subscribe((res: any) => {
      debugger;
      if (res.status === 'Success') {

        this.toastr.success(res.message);
      this.status = res.status;
        return false;
      } else {

        this.toastr.error(res.message);

      }
    }, err => {
      console.log(err);

    });


  }



}

