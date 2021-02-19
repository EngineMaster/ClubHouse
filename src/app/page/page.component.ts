import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
    code: number = Math.floor(Math.random() * 1000);
  constructor() { }

  ngOnInit(): void {
  }

}
