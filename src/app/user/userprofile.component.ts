import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  email = {};
  name = {};
  userid = {};
  lastname = {};
  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('userToken')) {
       this.router.navigate(['/login']);
    } else {

      this.email = localStorage.getItem('email');     // **Retried data**
      this.name = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
      this.lastname = localStorage.getItem('lastname');
      this.userid = localStorage.getItem('_id');
    }


  }

}
