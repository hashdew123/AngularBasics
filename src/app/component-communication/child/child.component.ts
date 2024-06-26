import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() childMessage: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  //ViewChild - reading from parent component
  parentMessage = 'Hello Parent!';

  constructor() {}

  sendMessageToParent() {
    this.messageEvent.emit('Hello from child');
  }
}
