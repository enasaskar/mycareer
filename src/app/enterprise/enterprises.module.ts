import { EnterpriseRoutingModule } from './enterprises-routing.module';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ViewOneItemComponent } from './enterprise-view-all/view-one-item/view-one-item.component';
import { EnterpriseViewAllComponent } from './enterprise-view-all/enterprise-view-all.component';
import { EnterpriseDetailsComponent } from './enterprise-details/enterprise-details.component';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';
import { EnterpriseComponent } from './enterprise.component';

@NgModule({
    declarations:[
        EnterpriseComponent,
        EnterpriseCreateComponent,
        EnterpriseDetailsComponent,
        EnterpriseViewAllComponent,
        ViewOneItemComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        EnterpriseRoutingModule,
        NgbModule
    ]
})

export class EnterprisesModule{

}