import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from '../user/user.module';
import { PostNewComponent } from './post-new/post-new.component';
import { PropertiesRoutingModule } from './properties.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    PostNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    PropertiesRoutingModule,
    SharedModule
  ]

})
export class PropertiesModule { }
