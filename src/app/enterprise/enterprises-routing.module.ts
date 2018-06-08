import { JobPostingPlansComponent } from './job-posting-plans/job-posting-plans.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterpriseViewAllComponent } from './enterprise-view-all/enterprise-view-all.component';
import { EnterpriseDetailsComponent } from './enterprise-details/enterprise-details.component';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';

const enterpriseRoutes: Routes = [
    {path : 'enterprises', component : EnterpriseViewAllComponent } ,
    {path : 'enterprises/enterprise/details/:id', component: EnterpriseDetailsComponent},
    {path : 'enterprises/enterprise/details', component: EnterpriseDetailsComponent},    
    {path : 'enterprises/enetrprise/all' , component : EnterpriseViewAllComponent},
    {path : 'enterprises/enterprise/create', component : EnterpriseCreateComponent},
    {path : 'enterprises/enterprise/goPremium', component : JobPostingPlansComponent}

];

@NgModule({

    imports: [
        RouterModule.forChild(enterpriseRoutes)
    ],

    exports: [
        RouterModule
    ]

})

export class EnterpriseRoutingModule {

}
