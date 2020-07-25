import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [TestComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
