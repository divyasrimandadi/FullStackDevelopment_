import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReversePipe } from '../../../pipes/reverse.pipe';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule,ReversePipe],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  @Input() studentData!:any
  
  
}
