import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  serviceWorks(){
    return [
      { id: 1, name: 'Email1' },
      { id: 2, name: 'Email2' },
      { id: 3, name: 'Email3' },
      { id: 4, name: 'Email4' },
      { id: 5, name: 'Email5' }
    ];
  }
}
