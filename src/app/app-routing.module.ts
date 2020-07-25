import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateModuleComponent} from '../app/create-module/create-module.component';

const routes: Routes = [
  { path: 'create-module', component: CreateModuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
