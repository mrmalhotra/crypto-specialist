import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListOfCurrenciesPage} from "../pages/list-of-currencies/list-of-currencies";
import {HttpModule} from "@angular/http";
import {ShowSpecsPage} from "../pages/show-specs/show-specs";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListOfCurrenciesPage,
    ShowSpecsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListOfCurrenciesPage,
    ShowSpecsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
