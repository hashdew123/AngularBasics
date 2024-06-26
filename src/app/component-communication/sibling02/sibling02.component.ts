import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sibling02',
  templateUrl: './sibling02.component.html',
  styleUrl: './sibling02.component.scss',
})
export class Sibling02Component {
  constructor(private dataService: DataService) {}

  sendMessageToSibling() {
    this.dataService.changeMessage('Hello sibling 01');
  }
}
