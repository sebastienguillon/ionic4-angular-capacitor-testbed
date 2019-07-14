import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';

// export const LoggerConfigService = new InjectionToken<any>('LoggerConfig');

import { LoggerConfigService } from 'src/app/common/tokens';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoggerModule {

  static setup(config: any): ModuleWithProviders {
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
