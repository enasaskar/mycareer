import { EnterprisesModule } from './enterprise/enterprises.module';
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
<<<<<<< HEAD
    // AppRoutingModule,
    // UserModule,
    InterviewsModule
=======
    AppRoutingModule,
    UserModule,
    EnterprisesModule
>>>>>>> 9329685192655e688031c129c4a367bd5c783ae4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
