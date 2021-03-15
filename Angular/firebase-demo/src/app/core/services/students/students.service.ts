import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  // firebase data url
  url = 'https://fir-demo-99a02-default-rtdb.firebaseio.com/students.json';

  private headers = new HttpHeaders({ 'content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // save student
  saveStudent(students: any[]) {
    try {
      return this.http.put(this.url, students, { headers: this.headers });
    }
    catch(error) {
      return Observable.throw(error);
    }
  }

  // fetch student
  fetchStudent() {
    try {
      return this.http.get(this.url);
    } 
    catch (error) {
      return Observable.throw(error);
    }
  }

  //delete student
  deleteStudent() {
    try {
      return this.http.delete(this.url);
    } 
    catch (error) {
      return Observable.throw(error);
    }
  }  

}
