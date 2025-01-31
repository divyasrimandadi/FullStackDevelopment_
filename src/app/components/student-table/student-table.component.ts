import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-table',
  imports: [],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  studentData=[
    {Id:1, Student : 'Divya',Phone:9014356789, Email :'divya@gmail.com', Gender:'Female',Marks:95},
    {Id:2, Student : 'Chandana',Phone:9182515757, Email :'chandana@gmail.com', Gender:'Female',Marks:90}
  ]
  
  
}
