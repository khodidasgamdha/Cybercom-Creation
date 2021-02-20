import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './service/authentication.service';
import { HomeComponent } from './auth guard/home/home.component';
import { LoginComponent } from './auth guard/login/login.component';
import { ReqresComponent } from './reqres/reqres.component';
import { UrlService } from './service/url.service';
import { globalErrorHandler } from './error/globle-error-handeler';
import { HttpClientModule } from '@angular/common/http';
import { ReqresLoginComponent } from './reqres-login/reqres-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReqresComponent,
    ReqresLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    UrlService,
    {provide: ErrorHandler, useClass: globalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
