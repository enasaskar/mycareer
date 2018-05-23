import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersModule } from './users/users.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { PathsModule } from './paths/path.module';

import { EnterpriseService } from './shared/classes/enterprise-service';
import { CoreModule } from 'src/app/core/core.module';
import { SkillsModule } from './skills/skills.module';

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
    EnterprisesModule,
    CoreModule,
    PathsModule,
    SkillsModule

  ],
  providers: [EnterpriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
