import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsComponent,FormsModule],
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
  increment()
  {
    this.count+=1

  }
  decrement(){
    this.count-=1
  }
    
  }



