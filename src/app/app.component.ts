import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,StudentTableComponent,AddStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title=''
  handleAddStudent(event:any){
    console.log(event);
  }
  //data stays on parent
  //parent pass the data to child
  studentData=[
    {Id:1, Student : 'Divya',Phone:9059667087, Email :'divya@gmail.com', Gender:'Female',Marks:95},  
  ]
  
}
