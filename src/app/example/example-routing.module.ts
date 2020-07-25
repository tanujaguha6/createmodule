import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';

const routes: Routes = [{path: 'list', component: ListComponent},]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
