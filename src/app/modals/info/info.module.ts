import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { InfoPage } from './info.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    InfoPage,
  ],
  entryComponents: [
    InfoPage,
  ],
})
export class InfoPageModule {}
