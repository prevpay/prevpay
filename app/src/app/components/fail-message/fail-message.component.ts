import { Component, OnInit, Input} from '@angular/core';
import { FailMessageIcon } from 'src/app/models';

@Component({
  selector: 'fail-message',
  templateUrl: './fail-message.component.html',
  styleUrls: ['./fail-message.component.scss'],
})
export class FailMessageComponent implements OnInit {

  @Input('title') title: string;
  @Input('message') message: string;
  @Input('icon') icon: FailMessageIcon;

  constructor() { }

  ngOnInit() {}

}
