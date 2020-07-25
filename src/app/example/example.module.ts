import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ExampleComponent, ListComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
