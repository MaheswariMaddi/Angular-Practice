import { Injectable } from '@angular/core';
import { StudentApplication } from '../model/student-Application'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobPortalService {
  httpClientObj: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClientObj = httpClient;
  }

  createStudenApplication(application: StudentApplication): Observable<StudentApplication> {
    const url = "http://localhost:5265/api/Jobportal";
    return this.httpClientObj.put<StudentApplication>(url, application);
  }

  getstudentdetailsbyname(name: string): Observable<StudentApplication> {
    const url = "http://localhost:5265/api/Jobportal/?name=" + name;
    return this.httpClientObj.get<StudentApplication>(url);
  }
  
}