import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MeteoPage } from '../pages/meteo/meteo';
import { OptionsPage } from '../pages/options/options';
import { ZonePage } from '../pages/zone/zone';
import { HttpModule } from '@angular/http';
import { Geolocation }from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { ZoneProvider } from '../providers/zone/zone';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeteoPage,
    OptionsPage,
    ZonePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MeteoPage,
    OptionsPage,
    ZonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    Geolocation,
    ZoneProvider
  ]
})
export class AppModule {}
