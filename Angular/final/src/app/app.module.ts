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
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { CanDeactivateGuard } from './core/services/can-deactivate/can-deactivate.guard';
import { CruiseFormComponent } from './cruise-form/cruise-form.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { DataService } from './core/services/registration-detail/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    LoginComponent,
    PageNotFoundComponent,
    CruiseFormComponent,
    RegistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    CmsModule,
    ProductsModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserListService,
    AuthGuardService,
    CanDeactivateGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
