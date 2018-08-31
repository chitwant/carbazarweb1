import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
// import { Pipe, PipeTransform } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  status = 'accepted';
  yes = 'yes';
  orderhistory: any[];
  ordersalehistory: any[];
  email = localStorage.getItem('email');
  userid = localStorage.getItem('_id');
sale: Boolean = false;
purchase: Boolean = false;

   constructor( private userService: UserService,
    private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService ) { }

 ngOnInit() {  }

  purchageHistory() {
    this.userService.getpurchaseorderhistory(this.userid)
    .subscribe((res: any) => {
    this.purchase = true;
    this.sale = false;
      debugger;
      this.orderhistory = res.orders;
      debugger;
      console.log( this.orderhistory);
     });

  }

  saleHistory() {

    this.userService.getsaleorderhistory(this.userid)
     .subscribe((res: any) => {
      this.sale = true;
      this.purchase = false;
       debugger;
       this.orderhistory = res.orders;
       debugger;
       console.log( this.orderhistory);
      });

  }

}
