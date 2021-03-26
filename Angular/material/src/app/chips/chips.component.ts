import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  constructor() {
    this.filteredBike = this.bikeCtrl.valueChanges.pipe(
      startWith(null),
      map((bike: string | null) => bike ? this._filter(bike) : this.allBikes.slice()));
   }

  ngOnInit(): void {
  }

  // fruits -------------------------------------------------------------
  visible = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
    {name: 'Mango'},
    {name: 'Grapes'},
  ];

  // add new fruits
  addFruits(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  // remove fruits
  removeFruits(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  // drag & drop -------------------------------------------------------------
  drop(event: CdkDragDrop<Fruit[]>) {
    moveItemInArray(this.fruits, event.previousIndex, event.currentIndex);
  }

  // bikes -------------------------------------------------------------------
  bikeCtrl = new FormControl();
  filteredBike: Observable<string[]>;
  bikes: string[] = ['Splender'];
  allBikes: string[] = ['KTM', 'Activa', 'Bullet', 'Vespa', 'Jupiter'];

  @ViewChild('bikeInput') bikeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  // add bike
  addBikes(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our bike
    if ((value || '').trim()) {
      this.bikes.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.bikeCtrl.setValue(null);
  }

  // remove bike
  removeBikes(bike: string): void {
    const index = this.bikes.indexOf(bike);

    if (index >= 0) {
      this.bikes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.bikes.push(event.option.viewValue);
    this.bikeInput.nativeElement.value = '';
    this.bikeCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allBikes.filter(bike => bike.toLowerCase().indexOf(filterValue) === 0);
  }

}