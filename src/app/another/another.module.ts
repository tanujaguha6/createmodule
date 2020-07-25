import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherRoutingModule } from './another-routing.module';
import { AnotherComponent } from './another.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [AnotherComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    AnotherRoutingModule
  ]
})
export class AnotherModule { }
