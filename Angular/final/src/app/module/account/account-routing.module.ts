import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { CanDeactivateGuard } from '../../core/services/can-deactivate/can-deactivate.guard';
import { TableComponent } from 'src/app/table/table.component';

const routes: Routes = [
  { path: 'my-account', component: MyAccountComponent, canDeactivate: [CanDeactivateGuard] },
  { path: '**', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
