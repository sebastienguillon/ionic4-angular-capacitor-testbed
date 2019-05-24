import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ErrorHandlerService } from './services/error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppPreferences } from '@ionic-native/app-preferences/ngx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * REMINDER:
 * Since Angular 6, we don't need to add singleton services to app.module.ts's
 * providers, as long as we define providedIn: 'root' in the service's
 * @Injectable decorator.
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AppPreferences,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [
    AppComponent,
  ],
  exports: [
  ],
})
export class AppModule {}
