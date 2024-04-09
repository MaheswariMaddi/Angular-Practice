import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUserProfile } from '../model/github-user-profile';

@Injectable({
  providedIn: 'root'
})
export class GithubUserDataService {
  httpClient: HttpClient;

  constructor(httpClientObj: HttpClient) { 
    this.httpClient = httpClientObj
  }

  getUserProfileByUserName(userName: string): Observable<GithubUserProfile> {
    const url = 'https://api.github.com/users/'+ userName;
    return this.httpClient.get<GithubUserProfile>(url);
  }
}
