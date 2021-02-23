import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './core/services/users/user-list.service';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { AccountModule } from './module/account/account.module';
import { CmsModule } from './module/cms/cms.module';
import { ProductsModule } from './module/products/products.module';
import { UsersModule } from './module/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    CmsModule,
    ProductsModule,
    UsersModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
