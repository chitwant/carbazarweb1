import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email = {};
name = {};
userid = {};
  constructor(private router: Router,
  private dataservice: DataService
  ) { }
log: Boolean = false;
  ngOnInit(): void {
   debugger;
    if (localStorage.getItem('userToken')) {
      this.dataservice.setUserStauts(true);
      this.dataservice.isUserLogin.subscribe(x => {
        if (x === true) {  this.log = true; }
      });
      this.email = localStorage.getItem('email');     // **Retried data**
      this.name = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
      this.userid = localStorage.getItem('_id');
 }
    }
    authSignOut() {
     // debugger
      localStorage.removeItem('firstname');
      localStorage.removeItem('userTokan');
      localStorage.removeItem('lastname');
      localStorage.removeItem('email');
      localStorage.removeItem('_id');
      localStorage.clear();
      if (localStorage.removeItem('userTokan') == null) {
        this.dataservice.setUserStauts(false);
        this.dataservice.isUserLogin.subscribe(x => {
          if (x === false) {  this.log = false; }
        });

      }
      this.router.navigate(['/']);
  }

}
