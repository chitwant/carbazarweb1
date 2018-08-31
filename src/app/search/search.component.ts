import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import {ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  data: any[];
  // cars:{};
  // length:{};
  dtTrigger: Subject<string> = new Subject<string>();
  constructor(private carService: CarService) { }
  ngOnInit() {
   // data table setting
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      columnDefs: [ {
        'targets': 3,
       'orderable': false
        } ]
    };
    this.getData();
  }

getData(): void {
  this.carService.getCars().subscribe(x => {
  debugger
  // this.contacts = x;
  this.data = x.cars;
  this.dtTrigger.next('k');
  },
  error => {console.log(error)});
}
}
