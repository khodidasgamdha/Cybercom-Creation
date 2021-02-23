import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
