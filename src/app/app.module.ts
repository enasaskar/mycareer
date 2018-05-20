import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { InterviewsModule } from 'src/app/interviews/interviews.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // UserModule,
    InterviewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
