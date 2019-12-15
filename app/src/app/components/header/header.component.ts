import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('color') color: string;
  @Input('title') title: string;
  @Input('account') account: any;

  constructor() { }

  ngOnInit() {}

}
