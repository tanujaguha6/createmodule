import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextrrrRoutingModule } from './textrrr-routing.module';
import { TextrrrComponent } from './textrrr.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [TextrrrComponent, ListComponent],
  imports: [
    CommonModule,
    TextrrrRoutingModule
  ]
})
export class TextrrrModule { }
