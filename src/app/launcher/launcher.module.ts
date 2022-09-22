import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {LauncherRoutingModule} from './launcher-routing.module';
import {LauncherBaseComponent} from './base/base.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LauncherBaseComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
  ],
  exports: [
    LauncherBaseComponent,
  ],
  imports: [
    CommonModule,
    LauncherRoutingModule,
    FormsModule
  ]
})
export class LauncherModule {
}
