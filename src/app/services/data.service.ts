import { Injectable } from '@angular/core';
import {hotels} from '../constans';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = hotels;
  constructor() { }

  setData(id, data) {
    this.data[0] = data;
  }
  getData(id){
    return this.data[id];
  }
}
