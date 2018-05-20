import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalendarioPage } from '../pages/calendario/calendario';
import { FalePage } from '../pages/fale/fale';
import { AlunoPage } from '../pages/aluno/aluno';
import { AjudaPage } from '../pages/ajuda/ajuda';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarioPage,
    FalePage,
    AlunoPage,
    AjudaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalendarioPage,
    FalePage,
    AlunoPage,
    AjudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
