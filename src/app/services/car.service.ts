import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

//const httpOptions = {
 // headers: new HttpHeaders({'Content-Type': 'application/json'}
//};

 var headers = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Access-Control-Allow-Origin', '*')
                                 .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
                                 .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const httpOptions =  {
            headers: headers
        };

@Injectable({
  providedIn: 'root'
})
export class CarService {
    private _apiURL = 'https://carbaazarapi.herokuapp.com';
 //private _apiURL = 'https://apicar.herokuapp.com';
 //private _apiURL = 'http://localhost:3000';

  constructor(private carService: CarService, private _http: HttpClient) { }

 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
   // console.error(
    //  `Backend returned code ${error.status}, ` +
    //  `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}

private extractData(res: Response) {
 const body = res;
  return body || { };
}

// Call Node Api for displaying car list on fronend in angular

  getCars(): Observable<any> {
 //  debugger;
  return this._http.get(this._apiURL + '/cars/carlist', httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

// call node Api for display particular car detail on frontend in angular
getByCarId(id: string) {
  return this._http.get(this._apiURL + `/cars/getID/` + id).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

// send email to admin for ask a price of car
sendEmailforprice() {
  return this._http.get(this._apiURL + `/users/sendemail`, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}


// send email to admin for ask a price of car
sendRejectmail(body) {
  debugger;
  return this._http.post(this._apiURL + `/users/rejectcarrequest/`, body).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

// Car Accept by user
carAccept(body) {
  debugger;
  return this._http.put(this._apiURL + `/cars/updateCarStatus/`, body).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

// Check car status is accepted then "Accept" link expire
acceptLinkExpire(reg_id: string) {
  return this._http.put(this._apiURL + `/cars/carStatus` + reg_id, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}


// Send car detail for user by email
sendcardetail(cardetail) {
  debugger;
  return this._http.post<any>(this._apiURL + '/users/sendcardetail', cardetail, httpOptions);
}




// add car by user after login
	addCar(fileToUpload, car: Car ) {
  const userid = localStorage.getItem('_id');
  const formData: FormData = new FormData();
  if (fileToUpload != null) { formData.append('images', fileToUpload); }
  formData.append('cost', car.Cost.toString());
  formData.append('manufacturer', car.Manufacturer.toString());
  formData.append('model', car.Model.toString());
  formData.append('registration_no', car.Registration_no.toString());
  formData.append('speedometer', car.Speedometer.toString());
  formData.append('userid', userid); 
  debugger;
  return this._http.post(this._apiURL + '/addcar/', formData).pipe(
    map(this.extractData),
    catchError(this.handleError));
}



// add car by user after login
addImage(regid: string) {
  debugger;
  return this._http.put(this._apiURL + '/cars/imageUplaod/' + regid, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

}
