import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeone',
  template: `
    <p>
      routeone Works!
    </p>
    <a routerLink="/routetwo">RouteTwo</a>
  `,
  styles: []
})
export class RouteoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
