import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MeteoPage } from '../pages/meteo/meteo';
import { OptionsPage } from '../pages/options/options';
import { ZonePage } from '../pages/zone/zone';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { AutocompletePage } from '../pages/register/autocomplete';
import { ForgottenPage } from '../pages/forgotten/forgotten';
import { HttpModule } from '@angular/http';
import { Geolocation }from '@ionic-native/geolocation';
import { SignaturePadModule } from 'angular2-signaturepad';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { ZoneProvider } from '../providers/zone/zone';
import { DatabaseProvider } from '../providers/database/database';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeteoPage,
    OptionsPage,
    ZonePage,
    WelcomePage,
    RegisterPage,
    ForgottenPage,
    AutocompletePage
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
    ZonePage,
    WelcomePage,
    RegisterPage,
    ForgottenPage,
    AutocompletePage
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
