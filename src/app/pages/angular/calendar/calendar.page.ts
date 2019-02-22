import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  locale: string;

  constructor(
    public configService: ConfigService,
  ) {
    this.locale = this.configService.getLocale();
  }

  ngOnInit() {
  }

  dateSelected($event: Date) {
    console.log($event);
  }
}
