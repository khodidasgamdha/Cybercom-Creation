import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/firebase', pathMatch: 'full' },
  { path: 'firebase', component: ManageStudentComponent },
  { path: 'firestore', component: ManageEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
