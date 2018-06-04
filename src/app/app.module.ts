import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobfairsModule } from './jobfairs/jobfairs.module';

import { UsersModule } from './users/users.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { PathsModule } from './paths/path.module';

import { EnterpriseService } from './shared/services/enterprise.service';
import { CoreModule } from 'src/app/core/core.module';
import { SkillsModule } from './skills/skills.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PathService } from './shared/services/path.service';
import { PathCategoryService } from './shared/services/PathCategory.service';
import { HomeComponent } from './home/home.component';
import { HomeService } from 'src/app/shared/services/home-service.service';
import { ServicesitemComponent } from './home/servicesitem/servicesitem.component';
import { JobofferitemComponent } from './home/jobofferitem/jobofferitem.component';
import { JobOfferService } from './shared/services/job-offer.service';
import { CompanylogoitemComponent } from './home/companylogoitem/companylogoitem.component';
import { CompanyLogoService } from 'src/app/shared/services/company-logo.service';
import { VacanciesModule } from 'src/app/vacancies/vacancies.module';
import { BsDatepickerModule, ModalModule, RatingModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';




// import { RouterModule } from '@angular/router';
import { SkillsService } from 'src/app/shared/services/skills.service';
import { SizeService } from 'src/app/shared/services/size.service';
import { VacancyService } from 'src/app/shared/services/vacancy-service';
import { VacancyLevelService } from 'src/app/shared/services/vacancyLevel-service';
import { BranchService } from 'src/app/shared/services/branch-service';
import { VacancyTypeService } from 'src/app/shared/services/vacancyType-service';
import { CurrencyService } from 'src/app/shared/services/currency-service';
import { RatingListService } from 'src/app/shared/services/ratingList.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesitemComponent,
    JobofferitemComponent,
    CompanylogoitemComponent
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
    NgbModule.forRoot(),
    VacanciesModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [
    EnterpriseService,
    PathService,
    PathCategoryService,
    HomeService,
    JobOfferService,
    CompanyLogoService,
    SkillsService,
    SizeService,
    VacancyService,
    BranchService,
    VacancyLevelService,
    VacancyTypeService,
    CurrencyService,
    RatingListService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
