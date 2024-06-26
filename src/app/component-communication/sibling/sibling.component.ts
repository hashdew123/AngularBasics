import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrl: './sibling.component.scss',
})
export class SiblingComponent implements OnInit, OnDestroy {
  message: string = '';
  subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  sendMessageToChildComponent() {
    this.dataService.changeMessage('Hello from Sibling');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
