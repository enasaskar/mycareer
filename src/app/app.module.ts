import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersModule } from './users/users.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';
// import { PathsModule } from './paths/path.module';

import { EnterpriseService } from './shared/classes/enterprise-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    InterviewsModule,
    AppRoutingModule,
    EnterprisesModule
    // PathsModule
  ],
  providers: [EnterpriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
