import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { AppError } from '../error/app-error';
import { NotFoundError } from '../error/not-found-error';
import { BadInput } from '../error/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // get data from url
  getPost() {
    return this.http.get(this.url);
  }

  // create new post
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if(error.status === 400)
          return Observable.throw(new BadInput(error.json()));
        return Observable.throw(new AppError(error.json()));
      })
    );
  }

  // update post
  updatePost(post) {
    // this.http.post(this.url, JSON.stringfy(post))
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  // delete post
  deletePost(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error: Response) => {
        if(error.status === 404)
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(error));
      })
    );
  }

}
