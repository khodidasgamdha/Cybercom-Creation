import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { CruiseFormComponent } from './cruise-form/cruise-form.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageComponent } from './page/page.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'page', component: PageComponent },
  { path: 'form', component: CruiseFormComponent },
  { path: 'registration-details', component: RegistrationDetailsComponent },
  { path: 'account', loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule), canActivate: [AuthGuardService] },
  { path: 'cms', loadChildren: () => import('./module/cms/cms.module').then(m => m.CmsModule), canActivate: [AuthGuardService] },
  { path: 'products', loadChildren: () => import('./module/products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuardService] },
  { path: 'users', loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule), canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
