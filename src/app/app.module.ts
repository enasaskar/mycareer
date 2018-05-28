import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobfairsModule } from './jobfairs/jobfairs.module';

import { UsersModule } from './users/users.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { PathsModule } from './paths/path.module';

import { EnterpriseService } from './shared/classes/enterprise-service';
import { CoreModule } from 'src/app/core/core.module';
import { SkillsModule } from './skills/skills.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PathService } from './shared/services/path.service';
import { PathCategoryService } from './shared/services/PathCategory.service';
import { SizeService } from './shared/classes/size-service';
import { VacanciesModule } from './vacancies/vacancies.module';
import { VacancyService } from './shared/services/vacancy-service';
import { BranchService } from './shared/services/branch-service';
import { VacancyLevelService } from './shared/services/vacancyLevel-service';
import { VacancyTypeService } from './shared/services/vacancyType-service';
import { CurrencyService } from './shared/services/currency-service';
// import { RouterModule } from '@angular/router';
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
    VacanciesModule,
    AppRoutingModule,
    SkillsModule,
    AppRoutingModule,
    NgbModule.forRoot()

  ],
  providers: [
    EnterpriseService,
    PathService,
    PathCategoryService,
    SizeService,
    VacancyService,
    BranchService,
    VacancyLevelService,
    VacancyTypeService,
    CurrencyService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
