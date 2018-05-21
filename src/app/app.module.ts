import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // UserModule,
     SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
