import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private http: HttpClient) { }

  // for get data page wise
  getData(pageNumber){
    try {
      return this.http.get('https://reqres.in/api/users/?page=' + pageNumber).pipe(
        map(Response=>Response)
      );
    } catch (error) {
      return Observable.throw(error);
    }
   
  }

}