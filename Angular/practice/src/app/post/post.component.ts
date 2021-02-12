import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { ToastrService } from 'ngx-toastr';
import { AppError } from '../error/app-error';
import { NotFoundError } from '../error/not-found-error';
import { BadInput } from '../error/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {
  
  posts: any[];

  constructor(private service: PostService, private toastr: ToastrService) { }

  // geting data from service and put in array
  ngOnInit() {
    this.service.getPost()
    .subscribe(
      response => { (this.posts = response as []) },
      error => { this.toastr.error('Network issue !!', error); }
    );
  }

  // create new post  
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
    .subscribe(
      response => {
        (post['id'] = (response as [])['id']), 
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
          // this.form.setErrors(error.json());
        }
        else
          this.toastr.error('An Unexpected Error occurred !!');
      }
    );
  }

  // update post
  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  // delete post
  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(
      (responce) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if(error instanceof NotFoundError)
          this.toastr.error('This Post Aleardy Deleted !!');
        else
          this.toastr.error('An Unexpected Error occurred !!');
      }
    );
  }

}
