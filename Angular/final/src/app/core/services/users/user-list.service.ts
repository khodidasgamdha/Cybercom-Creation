import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  // get user
  getUser() {
    try {
      return this.http.get("https://reqres.in/api/unknown").pipe(
          map(data => data)
        );
    }
    catch(error) {
      return Observable.throw(error);
    }
  }

}
