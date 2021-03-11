import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // get employee data
  employeeData() {
    try {
      return this.http.get('https://reqres.in/api/users?page=1');
    } 
    catch (error) {
      return Observable.throw(error);
    }
  }
}
