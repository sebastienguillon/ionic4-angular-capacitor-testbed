/**
 * About how this wrapper works, see:
 * https://stackoverflow.com/questions/28668759/
 * From the answer above, see why we don't need to bind to console, as in:
 * console.log.bind(console),
 * read: https://chromium.googlesource.com/chromium/src.git/+/807ec9550e8a31517966636e6a5b506474ab4ea9
 */

// https://www.freelancermap.com/freelancer-tips/12255-forroot-forchild-angular

import { Injectable, Inject } from '@angular/core';

import { LoggerConfigService } from 'src/app/common/tokens';

/**
 * Note: keep this interface shallow so that we can safely use Object.assign.
 */
export interface LoggerConfig {
  outputToConsole?: boolean;
  debugTag?: string;
  debugStyle?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private config: LoggerConfig = {
    outputToConsole: true,
    debugTag: '[DEBUG]',
    debugStyle: 'color:#fff',
  };

  constructor(
    @Inject(LoggerConfigService) providedConfig: LoggerConfig,
  ) {
    console.log('LoggerService.constructor()');
    this.applyConfig(providedConfig);
  }

  applyConfig(config: LoggerConfig) {
    console.log('providedConfig', config);
    console.log('this.config BEFORE', JSON.stringify(this.config));
    Object.assign(this.config, config);
    console.log('this.config AFTER', JSON.stringify(this.config));
    // this.config.outputToConsole = 'outputToConsole' in this.loggerConfig ? this.loggerConfig.outputToConsole : true;
    // this.config.debugTag = this.loggerConfig.debugTag;
  }

  /**
   * Log data to telemetry server.
   * Optionally you can log the message at the calling place by executing
   * the returned function.
   */
  logInfo(...args: any[]): () => void {
    this.logToServer(...args);
    if (this.config.outputToConsole) {
      args.unshift('color:#09f');
      args.unshift('%c[INFO]');
      return console.log.bind(console, ...args);
    } else {
      return this.noop;
    }
  }

  get debug(): (...args: any[]) => void {
    if (this.config.outputToConsole) {
      return console.log.bind(console, `%c${this.config.debugTag}`, this.config.debugStyle);
    } else {
      return this.noop;
    }
  }

  logToServer(...args: any[]) {
    console.log('Sending log to server...', ...args);
  }

  noop(): () => void {
    return () => {};
  }
}
