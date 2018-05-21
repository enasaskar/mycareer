import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDashBoardComponent } from './user/user-dash-board/user-dash-board.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: AppComponent},
  {path:'userProfile', component: UserProfileComponent},
  {path:'userDashBoard', component: UserDashBoardComponent}
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

