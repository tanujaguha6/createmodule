import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextRoutingModule } from './next-routing.module';
import { NextComponent } from './next.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [NextComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    NextRoutingModule
  ]
})
export class NextModule { }
