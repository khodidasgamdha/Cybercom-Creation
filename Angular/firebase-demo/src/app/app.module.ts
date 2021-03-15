import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { StudentsService } from './core/services/students/students.service';
import { EmployeeService } from './core/services/employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageStudentComponent,
    ManageEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    StudentsService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
