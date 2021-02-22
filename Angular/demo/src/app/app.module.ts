import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReqresComponent } from './reqres/reqres.component';
import { UrlService } from './service/url.service';
import { globalErrorHandler } from './error/globle-error-handeler';
import { HttpClientModule } from '@angular/common/http';
import { ReqresLoginComponent } from './reqres-login/reqres-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    UrlService,
    ErrorHandler,
    {provide: ErrorHandler, useClass: globalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
