import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { ProductsModal } from '../products-modal/products-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsPage
      }
    ])
  ],
  declarations: [
    ProductsPage,
    ProductsModal,
  ],
  entryComponents: [
    ProductsModal
  ]
})
export class ProductsPageModule {}
