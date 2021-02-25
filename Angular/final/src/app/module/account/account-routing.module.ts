import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CanDeactivateGuard } from '../../core/services/can-deactivate/can-deactivate.guard';

const routes: Routes = [
  { path: 'my-account', component: MyAccountComponent, canDeactivate: [CanDeactivateGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
