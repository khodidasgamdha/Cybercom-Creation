import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('01/01/2021'),
    },
    {
      name: 'Videos',
      updated: new Date('01/17/2021'),
    },
    {
      name: 'Documents',
      updated: new Date('01/28/2021'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Python',
      updated: new Date('02/20/2021'),
    },
    {
      name: 'JS',
      updated: new Date('03/18/2021'),
    }
  ];

}
