import { Component, OnInit } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {

  posts: any = [];

  constructor(private service: UrlService) { }

  ngOnInit() { }

  // geting data from service and put in array
  getData() {
    this.service.getData()
    .subscribe( posts => this.posts = posts);
  }

}
