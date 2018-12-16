import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public name: string;
  public email: string;
  public mobile_no: number;
  public gender: string;
  public address: string;
  public country: string;
  public state: string;
  public city: string;
  public password: string;
  public confirm_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  closePage() {
    this.navCtrl.pop();
  }

  signup() {

  }

}
