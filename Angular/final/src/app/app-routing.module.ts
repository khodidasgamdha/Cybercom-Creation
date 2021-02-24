import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule) },
  { path: 'cms', loadChildren: () => import('./module/cms/cms.module').then(m => m.CmsModule) },
  { path: 'products', loadChildren: () => import('./module/products/products.module').then(m => m.ProductsModule) },
  { path: 'users', loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule) },
  { path: '**', component: PageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
