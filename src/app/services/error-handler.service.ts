import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.error(
      '%c💣💣💣',
      'font-size:3em;',
      `\n`,
      error,
    );
  }

}
