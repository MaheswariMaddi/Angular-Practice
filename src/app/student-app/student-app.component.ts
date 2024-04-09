import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentApplication } from '../model/student-Application';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-student-app',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './student-app.component.html',
  styleUrl: './student-app.component.css'
})
export class StudentAppComponent {
  year:number[];
  d:StudentApplication;
  
  constructor(public l:ListService){

    this.d = new StudentApplication() 
    this.year =l.year
  }

  print(e: Event) {
    console.log(this.d)
  }
  Update(m: Event) {

    this.d = new StudentApplication()
  }
}


