import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';

// export const LoggerConfigService = new InjectionToken<any>('LoggerConfig');

import { LoggerConfigService } from 'src/app/common/tokens';
import { LoggerConfig } from 'src/app/common/logger/logger.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoggerModule {
  constructor() {
    console.log('%cLoggerModule.constructor()', 'color:#f0f');
  }
  static setup(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        LoggerService, {
          provide: LoggerConfigService,
          useValue: config,
        }
      ]
    };
  }
}
