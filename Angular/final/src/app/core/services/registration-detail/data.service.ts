import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [];
  constructor() { }

  // store data
  storeData(data) {
    this.data = data;
  }

  // pass data
  passData() {
    return this.data;
  }

}
