import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../../core/services/list-user/list-user.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {

  posts: any = [];

  constructor(private service: ListUserService) { }

  ngOnInit() { }

  // geting data from service
  getData(pageNumber) {
    this.service.getData(pageNumber)
      .subscribe( posts => {
        if(posts["data"]) {
          this.posts = posts
        }
      });
  }

}