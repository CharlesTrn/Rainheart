import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from "../providers/database/database"


import { HomePage } from '../pages/home/home';
import { MeteoPage } from '../pages/meteo/meteo';
import { OptionsPage } from '../pages/options/options';
import { ZonePage } from '../pages/zone/zone';
import { WelcomePage } from '../pages/welcome/welcome';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  name: any;
  mail: any;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,private storage: Storage, private databaseProvider: DatabaseProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Settings', component: OptionsPage}
    ];

    storage.get('userMail').then((val) => {
      this.mail = val;
      this.databaseProvider.getName(this.mail)
      .subscribe(name => {
        this.name = (<any>name)._body;
      });
    });




  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);

  }

  logout() {
    this.nav.push(WelcomePage);

  }
}
