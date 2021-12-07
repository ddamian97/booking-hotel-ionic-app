import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {hotels} from '../constans';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page{

  // hotels: any;
  // export const hotels = (hotels);
  protected hotels: any[];
  constructor(private router: Router, private dataService: DataService) {
    // const hotels = [];
    // hotels.push(hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9);

    this.hotels = hotels;
  }

  openDetailsWithState(id) {
    // this.dataService.setData(1, this);
    const url = '/tab3/' + id;
    this.router.navigateByUrl(url);
  }

}
