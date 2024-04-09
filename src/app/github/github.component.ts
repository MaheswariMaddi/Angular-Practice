import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubUserDataService } from '../services/github-user-data.service';
import { GithubUserProfile } from '../model/github-user-profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {

  githubUserService: GithubUserDataService;
  name: string;
  userdetails:GithubUserProfile | null;



  constructor(githubUserServiceObj: GithubUserDataService) {
    this.githubUserService = githubUserServiceObj;
    this.name = '';
    this.userdetails=null;
  }

  getUserData() {
    this.githubUserService.getUserProfileByUserName(this.name)
                          .subscribe(data => {
                             console.log(data);
                             this.userdetails=data                          

                          });

  }

}
