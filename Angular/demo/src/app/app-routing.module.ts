import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './module/employee/employee.component';
import { CMSComponent } from './module/cms/cms.component';
import { CompanyComponent } from './module/company/company.component';
import { NotFoundComponent } from './module/not-found/not-found.component';
import { HomeComponent } from './module/home/home.component';
import { AuthGuard } from './core/services/auth-guard/auth-guard.service'
import { ReqresComponent } from './module/reqres/reqres.component';
import { ReqresLoginComponent } from './module/reqres-login/reqres-login.component';


const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/',
        pathMatch: 'full'
    },  
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    { 
        path: 'login', 
        component: ReqresLoginComponent
    },  
    { 
        path: 'listuser', 
        component: ReqresComponent,
        canActivate: [AuthGuard],
    },
    { 
        path: 'employee', 
        component: EmployeeComponent,
        loadChildren: () => import('./module/employee/employee.module').then(m => m.EmployeeModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'cms', 
        component: CMSComponent,
        loadChildren: () => import('./module/cms/cms.module').then(m => m.CmsModule),
        canActivate: [AuthGuard],
    },
    { 
        path: 'company', 
        component: CompanyComponent,
        loadChildren: () => import('./module/company/company.module').then(m => m.CompanyModule),
        canActivate: [AuthGuard],
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }