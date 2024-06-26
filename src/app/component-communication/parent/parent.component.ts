import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements AfterViewInit {
  parentMessage = 'message from parent';
  childMessage: string = '';
  viewChildMessage: string = '';

  @ViewChild(ChildComponent) child: ChildComponent = new ChildComponent();

  ngAfterViewInit() {
    this.viewChildMessage = this.child.parentMessage;
  }

  receiveMessage($event: string) {
    this.childMessage = $event;
  }
}
