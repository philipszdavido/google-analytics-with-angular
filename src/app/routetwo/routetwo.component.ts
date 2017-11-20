import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routetwo',
  template: `
    <p>
      routetwo Works!
    </p>
    <a routerLink="/routeone">RouteOne</a>
  `,
  styles: []
})
export class RoutetwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
