import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';

import { MeteoPage } from '../pages/meteo/meteo';
import { OptionsPage } from '../pages/options/options';
import { ZonePage } from '../pages/zone/zone';
import { WelcomePage } from '../pages/welcome/welcome';


import { HttpModule } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation }from '@ionic-native/geolocation';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { ZoneProvider } from '../providers/zone/zone';
import { DatabaseProvider } from '../providers/database/database';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';



@NgModule({
  declarations: [
    MyApp,

    MeteoPage,
    OptionsPage,
    ZonePage,
    WelcomePage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeteoPage,
    OptionsPage,
    ZonePage,
    WelcomePage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    Geolocation,
    ZoneProvider,
    DatabaseProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
