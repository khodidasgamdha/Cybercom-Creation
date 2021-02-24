import { Component, OnInit } from '@angular/core';
import { UserListService } from '../core/services/users/user-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _userArray = [];
  
  constructor(private userService: UserListService) { }

  // store data in local variable
  ngOnInit(): void {
    this.userService.getUser().subscribe(response => {
      if(response["data"]){
        this._userArray = response["data"];
      }
    })
  }

}
