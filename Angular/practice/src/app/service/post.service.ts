import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.post(this.url, JSON.stringify(post));
  }

  // update post
  updatePost(post) {
    // this.http.post(this.url, JSON.stringfy(post))
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  // delete post
  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
