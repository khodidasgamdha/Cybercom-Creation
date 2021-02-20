import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CMSComponent } from './cms/cms.component';
import { CompanyComponent } from './company/company.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service'


const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { title: 'Home' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    { 
        path: 'employee', 
        component: EmployeeComponent,
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    },
    { 
        path: 'cms', 
        component: CMSComponent,
        loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
    },
    { 
        path: 'company', 
        component: CompanyComponent,
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }