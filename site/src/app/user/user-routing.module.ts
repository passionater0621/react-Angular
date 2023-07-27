import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthActivate]
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [AuthActivate]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
