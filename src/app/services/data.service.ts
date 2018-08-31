import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private userLogin = new BehaviorSubject<any>(false);
  isUserLogin = this.userLogin.asObservable();
  setUserStauts(val: any) {
   this.userLogin.next(val);
 }

//  private userdetail = new BehaviorSubject<any>(false);
//  getuserdetail = this.userLogin.asObservable();
//  setUserStauts(val: any) {
//   this.userLogin.next(val);
// }
}
