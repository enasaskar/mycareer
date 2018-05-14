import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobfairsComponent } from './jobfairs.component';
import { JobfairListComponent } from './jobfair-list/jobfair-list.component';
import { JobfairAddEditComponent } from './jobfair-add-edit/jobfair-add-edit.component';
import { JobfairDetaileditemComponent } from './jobfair-detaileditem/jobfair-detaileditem.component';
import { JobfairItemComponent } from './jobfair-item/jobfair-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[JobfairsComponent, JobfairListComponent, JobfairAddEditComponent, JobfairDetaileditemComponent, JobfairItemComponent]
})
export class JobfairsModule { }
