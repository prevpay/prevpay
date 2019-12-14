import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input('label') label: string;
  @Output('onClick') onClick = new EventEmitter;
  
  constructor() { }

  ngOnInit() {}

  onButtonClick($event) {
    this.onClick.emit(
      $event
    );
  }

}
