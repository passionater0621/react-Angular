import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostNewComponent } from './properties/post-new/post-new.component';
import { ErrorComponent } from './shared/error/error.component';
import { AuthActivate } from './gurds/gurds';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post-new',
    component: PostNewComponent,
    canActivate: [AuthActivate],
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
