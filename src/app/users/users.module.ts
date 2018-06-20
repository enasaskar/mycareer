import { AuthGuard } from './../auth-guard.guard';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsEditComponent } from './user-details-edit/user-details-edit.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserViewAllComponent } from './user-view-all/user-view-all.component';
import { UsersComponent } from './users.component';
import { SkillsModule } from '../skills/skills.module';
import { VacanciesModule } from '../vacancies/vacancies.module';
import { InterviewsModule } from '../interviews/interviews.module';
import { EnterprisesModule } from '../enterprise/enterprises.module';
// import { UserAddWorkExperienceModalComponent } from './user-add-workExperience-Modal/user-add-workExperience-Modal.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    SkillsModule,
    VacanciesModule,
    InterviewsModule,
    EnterprisesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild([{path: 'user/:id', component: UsersComponent, children: [
      {path: '', redirectTo: 'userDashBoard', pathMatch: 'full'},
      {path: 'userProfile', component: UserProfileComponent, children: [
        {path: '', component: UserDetailsComponent, pathMatch: 'full'},
        {path: 'edit', component: UserDetailsEditComponent}
      ]},
      // {path: 'userDashBoard', canActivate: [AuthGuard],component: UserDashBoardComponent}
      {path: 'userDashBoard', component: UserDashBoardComponent}
    ]}])
  ],
  declarations: [
    UserProfileComponent,
    UserDetailsComponent,
    UserDetailsEditComponent,
    UserDashBoardComponent,
    UserViewAllComponent,
    UsersComponent
],
  exports: [
    UserProfileComponent,
    UserDetailsComponent,
    UserDetailsEditComponent,
    UserDashBoardComponent,
    UserViewAllComponent
  ]
})
export class UsersModule { }
