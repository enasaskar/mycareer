import { SignUpComponent } from './sign-up/sign-up.component';

import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const authRoutes: Routes = [
    {path : 'signUp', component : SignUpComponent } ,
    {path : 'login', component : LoginComponent } 
    

];

@NgModule({
    declarations:
    [
        SignUpComponent,
        LoginComponent
    ],
    imports:
    [
        CommonModule,
        FormsModule,
        RouterModule,
        RouterModule.forChild(authRoutes)

    ],
    exports: [
        RouterModule
    ]
})

export class AuthModule {}