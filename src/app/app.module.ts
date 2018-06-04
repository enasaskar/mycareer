import { EnterprisesModule } from './enterprise/enterprises.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobfairsModule } from './jobfairs/jobfairs.module'

import { UsersModule } from './users/users.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';
import { PathsModule } from './paths/path.module';

import { CoreModule } from 'src/app/core/core.module';
import { SkillsModule } from './skills/skills.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PathService } from './shared/services/path.service';
import { PathCategoryService } from './shared/services/PathCategory.service';
import { HomeComponent } from './home/home.component';
import { HomeService } from 'src/app/shared/services/home-service.service';
import { ServicesitemComponent } from './home/servicesitem/servicesitem.component';
import { JobofferitemComponent } from './home/jobofferitem/jobofferitem.component';
import { JobOfferService }from './shared/services/job-offer.service';
import { CompanylogoitemComponent } from './home/companylogoitem/companylogoitem.component'
import { CompanyLogoService } from 'src/app/shared/services/company-logo.service';
import { EnterpriseService } from 'src/app/shared/services/enterprise.service';
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
    NgbModule.forRoot()

  ],
  providers: [
    EnterpriseService,
    PathService,
    PathCategoryService,
    HomeService,
    JobOfferService,
    CompanyLogoService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
