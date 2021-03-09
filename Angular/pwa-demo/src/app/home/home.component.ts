import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private swUpdate: SwUpdate) { }

  ngOnInit(): void {
    this.reloadCache();
  }

  // if update then show confirmation massage
  reloadCache() {
    if(this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        if(confirm("New version Available !, Whold you like to update ?")) {
          window.location.reload();
        }
      });
    }
  }

}
