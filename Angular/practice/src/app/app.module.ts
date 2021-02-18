import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputDirective } from './input.directive';
import { Child1Component } from './child1/child1.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { TemplateDFormComponent } from './template-dform/template-dform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SweetAleartComponent } from './sweet-aleart/sweet-aleart.component';
import { ImgCompressComponent } from './img-compress/img-compress.component';
import { ToastrComponent } from './toastr/toastr.component';
import { PostComponent } from './post/post.component';
import { custPipe } from './custom.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './service/contact.service';
import {NgxImageCompressService} from 'ngx-image-compress';
import { PostService } from './service/post.service';
import { AppErrorHandeler } from './error/app-error-handeler';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputDirective,
    Child1Component,
    NewCourseComponent,
    TemplateDFormComponent,
    ReactiveFormComponent,
    SweetAleartComponent,
    ImgCompressComponent,
    ToastrComponent,
    PostComponent,
    custPipe,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    ContactService,
    NgxImageCompressService,
    { provide: ErrorHandler, useClass: AppErrorHandeler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
