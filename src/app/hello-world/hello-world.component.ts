import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NgIf,
    NgClass,
    NgStyle,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
    CurrencyPipe,
  ],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  // NGFOR

  // title = 'some list';

  // students = [
  //   { name: 'john wick ', class: '10th' },
  //   { name: 'john wick ', class: '10th' },
  //   { name: 'john wick ', class: '10th' },
  //   { name: 'john wick ', class: '10th' },
  // ];

  // NG SWETCH
  // num = 0;
  // showMe = true;
  // enableRed = false;
  // status = 'erro';
  // color = 'red';
  // fontSize = '';

  // toDate = new Date();
  // message = 'John Wick';
  // price = 3424;
}
