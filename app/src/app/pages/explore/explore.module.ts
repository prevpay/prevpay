import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ExplorePage } from './explore.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MissionDetailPage } from '../mission-detail/mission-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ExplorePage,
    MissionDetailPage
  ],
  entryComponents: [
    MissionDetailPage
  ]
})
export class ExplorePageModule {}
