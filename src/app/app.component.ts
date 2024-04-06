import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentAppComponent } from './student-app/student-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsComponent,FormsModule,CommonModule,StudentAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'Angular_FP';
  name="Maheswari";
  Country="INDIA";
  path:string="../assets/Parrot.jpg"
  cname="ss Special"
  d:string=new Date().toLocaleTimeString();
  isdisabled:boolean=true
  y:boolean=false
  t="org"
  con:boolean=false
  count=0
  show=false
  s=0
  country=["india","America","Japan"]
  arr=[1,2,3,4,5,6,7,8,9,10]
  increment()
  {
    this.count+=1

  }
  decrement(){
    this.count-=1
  }
  n=""  
  changename(x:any){
    
    this.n=x.target.value

  }
  city="Hyderabad"
  updatecity(){
    this.city="Chennai"
   
  }
  
  }



