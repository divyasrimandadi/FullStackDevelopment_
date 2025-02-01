import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  studentData=[
    {Id:1, Student : 'Divya',Phone:9059667087, Email :'divya@gmail.com', Gender:'Female',Marks:95},
    {Id:2, Student : 'Jaya',Phone:9121540158, Email :'jaya@gmail.com', Gender:'Female',Marks:90},
    {Id:3, Student : 'Bhujanga Rao',Phone:9908940158, Email :'bhujangarao@gmail.com', Gender:'Male',Marks:100},
    {Id:4, Student : 'Usha',Phone:9618801508, Email :'usha@gmail.com', Gender:'Female',Marks:99},
    
    
  ]
  
  
}
