import { Component } from '@angular/core';
import { DataService } from '../../component-communication/services/data.service';

//Component Decorator Metadata & Selector​
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})

//Template/Template URL
// @Component({
//   selector: 'app-basic',
//   template: '<h1>Hello World</h1>',
//   styleUrl: './data-binding.component.scss',
// })

//Style URL
// @Component({
//   selector: 'app-basic',
//   templateUrl: './data-binding.component.html',
//   styleUrl: './data-binding.component.scss',
// })

//Style URLs
// @Component({
//   selector: 'app-basic',
//   templateUrl: './data-binding.component.html',
//   styleUrls: ['./data-binding.component.scss'],
// })

//Styles
// @Component({
//   selector: 'app-basic',
//   templateUrl: './data-binding.component.html',
//   styles: ['h1 { font-weight: normal; }'],
// })

//Providers
// @Component({
//   selector: 'app-basic',
//   templateUrl: './data-binding.component.html',
//   providers: [DataService],
// })

export class BasicComponent {


  constructor(dataservice: DataService) {}
}
