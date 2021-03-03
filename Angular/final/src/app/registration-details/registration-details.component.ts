import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/registration-detail/data.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // recive data from service
  data = this.dataService.passData();

}
