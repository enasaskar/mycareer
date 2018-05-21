import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { EnterpriseService } from './shared/classes/enterprise-service';
import { CoreModule } from 'src/app/core/core.module';

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
    EnterprisesModule,
    CoreModule

  ],
  providers: [EnterpriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
