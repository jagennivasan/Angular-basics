import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent implements OnChanges,OnInit,DoCheck {
  @Input() text: string = '';
  ngOnInit():void{
    console.log("hello im ngoninit");
    this.text="hello"
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (!changes['text'].isFirstChange()) {
      // console.log('modified data');
      console.log('ngOnChanges is called', changes['text'].currentValue);
    // }


  }
  ngDoCheck(): void {
    
  }
}
