import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {LauncherBaseComponent} from "./base/base.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'contact_us', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LauncherRoutingModule {
}
