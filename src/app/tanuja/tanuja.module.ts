import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TanujaRoutingModule } from './tanuja-routing.module';
import { TanujaComponent } from './tanuja.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [TanujaComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    TanujaRoutingModule
  ]
})
export class TanujaModule { }
