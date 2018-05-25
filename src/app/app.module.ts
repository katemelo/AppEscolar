import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar } from '@ionic-native/calendar';

//AngularFireModule
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalendarioPage } from '../pages/calendario/calendario';
import { FalePage } from '../pages/fale/fale';
import { AlunoPage } from '../pages/aluno/aluno';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

//personanizando FirebaseApp
const firebaseAuth = {
  apiKey: "AIzaSyBUmEp-EfzAJLRRnf-K1ngY1Z2sRRoIxPY",
  authDomain: "agendaescolar-bd7da.firebaseapp.com",
  databaseURL: "https://agendaescolar-bd7da.firebaseio.com",
  projectId: "agendaescolar-bd7da",
  storageBucket: "agendaescolar-bd7da.appspot.com",
  messagingSenderId: "152753913149"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarioPage,
    FalePage,
    AlunoPage,
    AjudaPage,
    RegisterPage,
    LoginPage

  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalendarioPage,
    FalePage,
    AlunoPage,
    AjudaPage,
    RegisterPage,
    LoginPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar
    
  ]
})
export class AppModule {}
