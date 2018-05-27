import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreComponent } from './core.component';
import { InterviewsModule } from 'src/app/interviews/interviews.module';

@NgModule({
  imports: [
    CommonModule,
    InterviewsModule
  ],
  declarations: [HeaderComponent, FooterComponent, CoreComponent],
  exports: [HeaderComponent, FooterComponent, CoreComponent]
})
export class CoreModule { }
