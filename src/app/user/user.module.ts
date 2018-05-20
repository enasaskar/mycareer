import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsEditComponent } from './user-details-edit/user-details-edit.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserViewAllComponent } from './user-view-all/user-view-all.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserProfileComponent, 
    UserDetailsComponent, 
    UserDetailsEditComponent, 
    UserDashBoardComponent, 
    UserViewAllComponent
  ],
  exports: [
    UserProfileComponent, 
    UserDetailsComponent, 
    UserDetailsEditComponent, 
    UserDashBoardComponent, 
    UserViewAllComponent
  ]
})
export class UserModule { }
