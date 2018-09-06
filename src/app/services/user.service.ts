import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

userid = {};
  private _apiURL = 'https://carbaazarapi.herokuapp.com';
//  private _apiURL = 'https://apicar.herokuapp.com';
 // private _apiURL = 'http://localhost:3000';
  private _registerurl = this._apiURL + '/users/signUp';

  private _loginurl = this._apiURL + '/users/login';

   constructor(private http: HttpClient) { }
// Reguster service
  registerUser(user) {
    debugger;
    return this.http.post<any>(this._registerurl, user);
  }


// login service
  loginUser(user) {
    return this.http.post<any>(this._loginurl, user);
}

// Get car's by user
getCarUserList(userid) {
  return this.http.get<any>(this._apiURL + '/cars/carlistbyUserId/' + userid, userid);
}

// Getorder History
getpurchaseorderhistory(userid) {
  debugger;
  return this.http.get<any>(this._apiURL + '/cars/orderpurchasehistory/' + userid, httpOptions);
}

getsaleorderhistory(userid) {
  debugger;
  return this.http.get<any>(this._apiURL + '/cars/ordersalehistory/' + userid, httpOptions);
}



// Delete car's by user
deleteCarbyuser(r) {
debugger;
  return this.http.put<any>(this._apiURL + '/cars/deletecar/' + r, httpOptions);
}
// ChangePassword service

changePassword(email, registerUserData) {
  debugger;
  return this.http.post<any>(this._apiURL + '/users/changepassword/' + email, registerUserData);
}

verfyUserEmail(email, body) {
  debugger;
  return this.http.put<any>(this._apiURL + '/users/changeuserstatus/' + email, body);
}



}

