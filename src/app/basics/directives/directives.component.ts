import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isVisible: boolean = true;
  items: string[] = ['red','colors','blue','green'];
  isHidden: boolean = false;
  isActive: boolean = true;
  fontSize: string = '50';
  color: string = '#FF0000';
  isDisabled: boolean = true;
}
