import { Component, ViewChild } from '@angular/core';
import { Platform, Ion, Icon, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { FalePage } from '../pages/fale/fale';
import { AlunoPage } from '../pages/aluno/aluno';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp { //abrirá página correspondente
  @ViewChild('nav') nav: Nav;
  public rootPage:any;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
 
      this.rootPage = LoginPage;
      this.pages = [
        {titulo: 'Calendário', component: HomePage, icon: 'calendar'},
        {titulo: 'Adicionar Eventos', component: CalendarioPage, icon: 'add-circle'},
        {titulo: 'Fale com Professor', component: FalePage, icon: 'chatbubbles'},
        {titulo: 'Aluno', component: AlunoPage, icon: 'person'},
        {titulo: 'Ajuda', component: AjudaPage, icon: 'help-circle'},
        
      ];

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page){
    this.nav.setRoot(page);
  }
}

