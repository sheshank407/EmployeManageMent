import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardServiceService as AuthGuardCheck} from '../app/AuthServices/auth-guard-service.service'
import {EmployeeComponent} from './employee/employee.component';
import { LoginComponent } from './Login/login/login.component';
const routes: Routes = [
{path:'employee',component:EmployeeComponent,canActivate:[AuthGuardCheck]},
{path:'login',component:LoginComponent},
{path:'**',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
