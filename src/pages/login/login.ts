import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPageModule } from './login.module';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }
  //função para funcionamento do botão signIn 'entrar'

  registerUser() {
    this.navCtrl.push(RegisterPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Importante!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {

    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got some data', this.fire.auth.currentUser);
        this.alert('Sucesso! Você esta logado');
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
    console.log('would sign in with', this.user.value, this.password.value);
    // this.navCtrl.push(LoginPage);

  }

}