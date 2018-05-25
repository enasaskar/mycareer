import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobfairsModule } from './jobfairs/jobfairs.module'

import { UsersModule } from './users/users.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { PathsModule } from './paths/path.module';

import { EnterpriseService } from './shared/classes/enterprise-service';
import { CoreModule } from 'src/app/core/core.module';
import { SkillsModule } from './skills/skills.module';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { PathService } from './shared/services/path.service';
import { PathCategoryService } from './shared/services/PathCategory.service';
>>>>>>> 678303212b9483e7272d2e6f4c1f2ff14d4b4646

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    InterviewsModule,
    EnterprisesModule,
    CoreModule,
    PathsModule,
    SkillsModule,
    AppRoutingModule,
    NgbModule.forRoot()

  ],
  providers: [
    EnterpriseService,
    PathService,
    PathCategoryService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
