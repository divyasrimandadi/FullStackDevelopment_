import { Component,Output,EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  isExpand:boolean=false
  toggleExpand(){
    this.isExpand=!this.isExpand
  }
  //step1
  //create a form object
  studentFormObj={
    id:'',
    student: '',
    phone:'',
    email:'',
    gender:'',
    marks:''
  }
  //step2
  //import formsModule  and use [(ngModel)]

  //send data from child to parent
  //step1 create a emit event
  @Output() createNewStudentEvent=new EventEmitter()

  onStudentSave(){
    this.createNewStudentEvent.emit(this.studentFormObj)
    console.log(this.studentFormObj);
  }

  


}
