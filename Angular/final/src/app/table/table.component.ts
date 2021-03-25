import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserListService } from '../core/services/users/user-list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  _userArray = [];

  // create object for destroy subscription
  private destroy$: Subject<void> = new Subject<void>();
  
  constructor(private userService: UserListService) { }

  // store data in local variable
  ngOnInit(): void {
    this.userService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if(response["data"]){
          this._userArray = response["data"];
        }
      })
  }

  // destroy subscribe when component destroy
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
