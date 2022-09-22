import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LauncherRoutingModule } from './launcher-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    declarations: [
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        ContactComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
    imports: [
        CommonModule,
        LauncherRoutingModule
    ]
})
export class LauncherModule { }
