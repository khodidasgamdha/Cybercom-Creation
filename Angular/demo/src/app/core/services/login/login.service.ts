import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // userName = new Subject<any>();
  userName = new BehaviorSubject<any>('Aman');
  
  constructor(private http: HttpClient) { }

  // add data of username & password
  addData(data: any) {
    try {
      return this.http.post('https://reqres.in/api/login', data)
      .pipe(
        map(Response=>Response)
      );
    } catch (error) {
      return Observable.throw(error);
    }
    
  }

}
