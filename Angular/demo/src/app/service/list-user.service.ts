import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../error/app-error';
import { BadInput } from '../error/bad-input';
import { NotFoundError } from '../error/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private url: string, private http: HttpClient) { }

  // for get data page wise
  getData(pageNumber){
   return this.http.get(this.url + 'users/?page=' + pageNumber)
      .pipe(
        map(Response=>Response),
        catchError(this.handleError)
      );
  }

  // add data of username & password
  addData(data: any) {
    return this.http.post(this.url + "login", data)
      .pipe(map(Response=>Response),
        catchError((this.handleError))
      );
  }

  // error handeler
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error));

    if (error.status === 404) 
        return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }

}