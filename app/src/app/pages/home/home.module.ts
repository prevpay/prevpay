import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { ReceiveModal } from '../receive-modal/receive-modal.page';
import { InvestModal } from '../invest-modal/invest-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    ReceiveModal,
    InvestModal
  ],
  entryComponents: [
    ReceiveModal,
    InvestModal
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule {}
