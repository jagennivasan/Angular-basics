import { NgFor, NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgFor,NgIf,ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input('studentsInput') 
  students:string[]=[]

  addedStudent(students:string[]){
    this.students=students
  }
}
