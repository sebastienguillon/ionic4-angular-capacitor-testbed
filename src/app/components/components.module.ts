import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [
    PageListComponent,
  ],
  exports: [
    PageListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
