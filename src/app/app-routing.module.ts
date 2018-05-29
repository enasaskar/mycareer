import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserDashBoardComponent } from './users/user-dash-board/user-dash-board.component';
import { AppComponent } from './app.component';
import { InterviewsComponent } from 'src/app/interviews/interviews.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  // component should be anonymous home landing page not AppComponent (3shn kda bytl3 2 footers lw 3mlna /home route)
  {path: 'home', component: AppComponent},
  {path: 'iv', component: InterviewsComponent},
  {path: 'interviews', component: InterviewsComponent},
  {path: 'skillsList', component: SkillListComponent}
  // {path:'interviews', component: InterviewsComponent},
  // {path: 'skillsList', component: SkillListComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

