import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { EnterpriseService } from './shared/classes/enterprise-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // AppRoutingModule,
    // UserModule,
    InterviewsModule,
    AppRoutingModule,
    UserModule,
    EnterprisesModule

  ],
  providers: [EnterpriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
