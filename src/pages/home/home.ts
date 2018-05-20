import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:string;
  senha:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log("Email: "+ this.email);
    console.log("Senha: "+ this.senha);
  }

  goRegister(){
    this.navCtrl.push(RegistroPage);
  }
}
