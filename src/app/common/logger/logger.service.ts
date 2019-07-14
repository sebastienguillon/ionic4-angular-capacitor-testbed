/**
 * About how this wrapper works, see:
 * https://stackoverflow.com/questions/28668759/
 * From the answer above, see why we don't need to bind to console, as in:
 * console.log.bind(console),
 * read: https://chromium.googlesource.com/chromium/src.git/+/807ec9550e8a31517966636e6a5b506474ab4ea9
 */

import { Injectable, Inject } from '@angular/core';

import { LoggerConfigService } from 'src/app/common/tokens';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private outputToConsole = true;
  private debugTag = {
    text: '[DEBUG]',
    style: 'color:#f90',
  };
  private logPrefix = '';

  constructor(
    @Inject(LoggerConfigService) private loggerConfig,
  ) {
    this.debugTag = loggerConfig.degugTag;
  }

  init() {
    return {
      logInfo: (...args: any[]): () => void => {
        this.logToServer(...args);
        if (this.outputToConsole) {
          args.unshift('color:#09f');
          args.unshift('%c[INFO]');
          return console.log.bind(console, ...args);
        } else {
          return this.noop;
        }
      },
      debug: console.log.bind(console),
    };
  }

  /**
   * Log data to telemetry server.
   * Optionally you can log the message at the calling place by executing
   * the returned function.
   */
  logInfo(...args: any[]): () => void {
    this.logToServer(...args);
    if (this.outputToConsole) {
      args.unshift('color:#09f');
      args.unshift('%c[INFO]');
      return console.log.bind(console, ...args);
    } else {
      return this.noop;
    }
  }

  get debug() {
    return console.log.bind(console, `%c${this.debugTag.text}`, this.debugTag.style);
  }

  static get staticDebug() {
    return console.log.bind(console, '%c[DEBUG]', 'color:#fff');
  }

  logToServer(...args: any[]) {
    console.log('Sending log to server...', ...args);
  }

  noop(): () => void {
    return () => {};
  }
}
