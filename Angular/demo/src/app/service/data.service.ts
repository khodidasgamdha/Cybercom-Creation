import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../error/app-error';
import { NotFoundError } from '../error/not-found-error';
import { BadInput } from '../error/bad-input';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: String, private http: HttpClient) { }
  
  getData(){
   return this.http.get('https://reqres.in/api/users?page=1')
            .pipe(
              map(Response=>Response),
              catchError(this.handleError)
            )
  }

  // error handeler
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404) 
        return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }

}