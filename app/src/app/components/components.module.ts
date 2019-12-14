import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AngularSvgIconModule } from 'angular-svg-icon';

// Components
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FailMessageComponent } from './fail-message/fail-message.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AngularSvgIconModule,
  ],
  declarations: [
    TabsComponent,
    ButtonComponent,
    HeaderComponent,
    FailMessageComponent,
  ],
  exports: [
    AngularSvgIconModule,
    TabsComponent,
    ButtonComponent,
    HeaderComponent,
    FailMessageComponent
  ]
})
export class ComponentsModule { }
