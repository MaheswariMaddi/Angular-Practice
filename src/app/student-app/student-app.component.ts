import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-app.component.html',
  styleUrl: './student-app.component.css'
})
export class StudentAppComponent {
  d={name:"",
  age:"",
  gender:"",
  passedOut:'',
  remoteMode:"",
  hybridMode:"",
  experience:"",
  commpanyName:'',
}
  year=[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]

 
  
  print(e:Event){
    console.log(this.d)
  }
  Update(m:Event){
  
  this.d={name:"",
  age:"",
  gender:"",
  passedOut:'',
  remoteMode:"",
  hybridMode:"",
  experience:"",
  commpanyName:'',
}
  }

}
