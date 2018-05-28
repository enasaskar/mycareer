import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsEditComponent } from './user-details-edit/user-details-edit.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserViewAllComponent } from './user-view-all/user-view-all.component';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: 'user/:id', component: UsersComponent, children: [
      {path: '', redirectTo: 'userDashBoard', pathMatch: 'full'},
      {path: 'userProfile', component: UserProfileComponent, children: [
        {path: '', component: UserDetailsComponent, pathMatch: 'full'},
        {path: 'edit', component: UserDetailsEditComponent}
      ]},
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
