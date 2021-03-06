import { Component, OnInit } from '@angular/core';
import { UserListService } from '../core/services/users/user-list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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
