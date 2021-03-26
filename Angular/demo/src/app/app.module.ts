import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReqresComponent } from './reqres/reqres.component';
import { ListUserService } from './core/services/list-user/list-user.service';
import { globalErrorHandler } from './core/error/globle-error-handeler';
import { HttpClientModule } from '@angular/common/http';
import { ReqresLoginComponent } from './reqres-login/reqres-login.component';
import { LoginService } from './core/services/login/login.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReqresComponent,
    ReqresLoginComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ListUserService,
    LoginService,
    ErrorHandler,
    {provide: ErrorHandler, useClass: globalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
