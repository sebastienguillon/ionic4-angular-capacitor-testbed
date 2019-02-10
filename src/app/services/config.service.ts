import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private locale = 'en';
  private availableLocales = ['fr', 'en'];

  constructor() {}

  getLocale(): string {
    return this.locale;
  }

  setLocale(locale: string): string {
    if (this.availableLocales.includes(locale)) {
      this.locale = locale;
    }
    return this.locale;
  }
}
