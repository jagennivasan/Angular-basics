import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @Output() studentAdded:EventEmitter<string[]> = new EventEmitter;
  
  students:string[] = [];
  studentNames = '';

  addStudent(){
    this.students.push(this.studentNames);
    this.studentNames ="";
    console.log(this.students);
    this.studentAdded.emit(this.students)
  }
}
