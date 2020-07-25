import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [FirstComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
