import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../error/app-error';
import { NotFoundError } from '../error/not-found-error';
import { BadInput } from '../error/bad-input';

@Injectable()
export class DataService {
  constructor(private url, private http: HttpClient) {}

  // get data from url
  getAll() {
    return this.http.get(this.url).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  // create new post
  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  // update post
  update(resource) {
    // this.http.post(this.url, JSON.stringfy(post))
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  // delete post
  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404) 
        return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
