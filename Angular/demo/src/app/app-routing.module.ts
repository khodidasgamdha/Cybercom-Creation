import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './module/employee/employee.component';
import { CMSComponent } from './module/cms/cms.component';
import { CompanyComponent } from './module/company/company.component';
import { NotFoundComponent } from './module/not-found/not-found.component';
import { HomeComponent } from './auth guard/home/home.component';
import { LoginComponent } from './auth guard/login/login.component';
import { AuthGuard } from './service/auth-guard.service'
import { ReqresComponent } from './reqres/reqres.component';
import { ReqresLoginComponent } from './reqres-login/reqres-login.component';


const routes: Routes = [
    { 
        path: '', 
        // component: ReqresComponent
        component: ReqresLoginComponent
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
        loadChildren: () => import('./module/employee/employee.module').then(m => m.EmployeeModule),
    },
    { 
        path: 'cms', 
        component: CMSComponent,
        loadChildren: () => import('./module/cms/cms.module').then(m => m.CmsModule),
    },
    { 
        path: 'company', 
        component: CompanyComponent,
        loadChildren: () => import('./module/company/company.module').then(m => m.CompanyModule),
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