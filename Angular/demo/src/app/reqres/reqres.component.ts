import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {

  posts: any = [];
  user:any;

  constructor(private service: UrlService) { }

  ngOnInit() { }

  // geting data from service
  getData(pageNumber) {
    this.service.getData(pageNumber)
    .subscribe( posts => this.posts = posts);
  }

}