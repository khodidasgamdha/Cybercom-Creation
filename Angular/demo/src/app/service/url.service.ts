import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService extends DataService {

  constructor(http: HttpClient) { 
    super('https://reqres.in/api/users?page=1', http);
  }
}
