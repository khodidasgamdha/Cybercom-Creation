import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/service/post/post.service';
import { AppError } from '../core/error/app-error';
import { NotFoundError } from '../core/error/not-found-error';
import { BadInput } from '../core/error/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {
  
  posts: any = [];

  constructor(private service: PostService) { }

  // geting data from service and put in array
  ngOnInit() {
    this.service.getAll()
    .subscribe( posts => this.posts = posts);
  }

  // create new post  
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
        (post['id'] = newPost['id']), 
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
          // this.form.setErrors(error.json());
        }
        else
          throw error;
      }
    );
  }

  // update post
  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
      console.log(updatedPost);
      }
    );
  }

  // delete post
  deletePost(post) {
    this.service.delete(post.id)
    .subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('Already deleted !');
        else
          throw error;
      }
    );
    // this.service.delete(post.id);
  }

}
