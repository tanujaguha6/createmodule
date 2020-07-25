import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';

const routes: Routes = [{path: 'list', component: ListComponent},{path: 'add-edit/:id?', component: AddEditComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
