import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyConfigurationComponent } from '../company-configuration/company-configuration.component';
// import { CompanyComponent } from '../company/company.component';

const routes: Routes = [
  { path: 'company-configuration', component: CompanyConfigurationComponent },
  // { path: '', component: CompanyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
