import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentApplication } from '../model/student-Application';
import { ListService } from '../services/list.service';
import { JobPortalService } from '../services/job-portal.service';


@Component({
  selector: 'app-student-app',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './student-app.component.html',
  styleUrl: './student-app.component.css'
})
export class StudentAppComponent {
  year: number[];
  d: StudentApplication;
  name ="";
  result!:StudentApplication;


  constructor(public l: ListService, public jobPortalServiceObj: JobPortalService) {

    this.d = new StudentApplication()
    this.year = l.year
  }

  submit() {
    var createObs = this.jobPortalServiceObj.createStudenApplication(this.d);
    createObs.subscribe((response) => {
      console.log("API Response", response)
     
    });
    
  }

  Update(m: Event) {
    this.d = new StudentApplication()
  }

  Getdata() {
    var getObs = this.jobPortalServiceObj.getstudentdetailsbyname(this.name);
    getObs.subscribe((response) => {
      console.log("API Response", response)
      this.result=response;

    })
  }

}
