import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthActivate } from '../gurds/gurds';
import { ErrorComponent } from '../shared/error/error.component';
import { isOwner } from '../gurds/isOwner';

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent,
      },
      {
        path: ':propertyId',
        component: DetailsComponent
      },
      {
        path: ':propertyId/edit',
        component: EditComponent,
        canActivate: [AuthActivate, isOwner]
      },
      {
        path: '**',
        component: ErrorComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesRoutingModule { }