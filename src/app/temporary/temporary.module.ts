import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemporaryRoutingModule } from './temporary-routing.module';
import { TemporaryComponent } from './temporary.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [TemporaryComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    TemporaryRoutingModule
  ]
})
export class TemporaryModule { }
