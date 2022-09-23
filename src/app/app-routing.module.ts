import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminBaseComponent} from "./admin/base/base.component";
import {LauncherBaseComponent} from "./launcher/base/base.component";
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LauncherBaseComponent,
    loadChildren: () => import('./launcher/launcher.module').then(m => m.LauncherModule)
  },
  {
    path: 'admin',
    component: AdminBaseComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
