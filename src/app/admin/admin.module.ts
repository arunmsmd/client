import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminBaseComponent} from "./base/base.component";
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AdminBaseComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
