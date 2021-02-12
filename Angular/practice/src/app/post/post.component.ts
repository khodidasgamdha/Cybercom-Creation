import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  // geting data from site and put in array
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((response) => (this.posts = response as []));
  }

  // create new post  
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post)).subscribe((response) => {
      (post['id'] = (response as [])['id']), this.posts.splice(0, 0, post);
    });
  }

  // update post
  updatePost(post) {
    //   this.http.post(this.url, JSON.stringfy(post))
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe((response) => {
        console.log(response);
      });
  }

  // delete post
  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe((responce) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
