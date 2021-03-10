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
      return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    } 
    catch (error) {
      return Observable.throw(error);
    }
  }
}
