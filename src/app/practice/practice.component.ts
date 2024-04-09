import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {

  constructor(public m:ListService){
  

  }
  Addyear(){
    let yearlistlength=this.m.year.length
    let lastelement=this.m.year[yearlistlength-1]
    this.m.year.push(lastelement+1)
  }

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
