import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { StudentApplication } from './model/student-Application';
import { StudentAppComponent } from './student-app/student-app.component';
import { PracticeComponent } from './practice/practice.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [


    {
        path: 'event', component: EventsComponent
    },
    {

        path: '', redirectTo: "/github", pathMatch: "full"
    },
    {
        path: 'github', component: GithubComponent

    },
    {
        path: "student", component: StudentAppComponent
    },
    {
        path: "practice", component: PracticeComponent
    },
    {
        path: '**', component: PagenotfoundComponent
    },

];
