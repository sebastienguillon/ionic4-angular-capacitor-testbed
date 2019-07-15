import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
  imports: [
    DatePickerModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
