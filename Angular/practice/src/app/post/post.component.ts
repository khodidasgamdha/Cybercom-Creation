import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {
  
  posts: any[];

  constructor(private service: PostService) { }

  // geting data from service and put in array
  ngOnInit() {
    this.service.getPost().subscribe((response) => (this.posts = response as []));
  }

  // create new post  
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post).subscribe((response) => {
      (post['id'] = (response as [])['id']), this.posts.splice(0, 0, post);
    });
  }

  // update post
  updatePost(post) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  // delete post
  deletePost(post) {
    this.service.deletePost(post.id).subscribe((responce) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
