import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
    declarations: [
        EmailDirective,
        LoaderComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        EmailDirective,
        LoaderComponent
    ]
})
export class SharedModule { }
