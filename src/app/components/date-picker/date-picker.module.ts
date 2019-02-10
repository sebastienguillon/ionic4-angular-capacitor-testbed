import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class DatePickerModule { }
