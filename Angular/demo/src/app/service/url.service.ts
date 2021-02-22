import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListUserService } from './list-user.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService extends ListUserService {

  constructor(http: HttpClient) { 
    super('https://reqres.in/api/', http);
  }
}