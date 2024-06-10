import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true, 
  imports: [FormsModule,ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  students:string[] = [];
  studentNames = '';

  addStudent(){
    this.students.push(this.studentNames);
    this.studentNames ="";
    console.log(this.students);
    
  }

}
