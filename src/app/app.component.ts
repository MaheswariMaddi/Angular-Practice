import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentAppComponent } from './student-app/student-app.component';
import { GithubComponent } from './github/github.component';
import { PracticeComponent } from './practice/practice.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsComponent,FormsModule,
    CommonModule,StudentAppComponent, GithubComponent,RouterModule,PracticeComponent,
    PagenotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  
  
  }



