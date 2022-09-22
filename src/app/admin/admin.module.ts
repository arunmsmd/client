import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';
import {AdminBaseComponent} from "./base/base.component";


@NgModule({
  declarations: [
    AdminBaseComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
