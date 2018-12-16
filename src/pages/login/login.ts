import { WebservicesProvider } from './../../providers/webservices/webservices';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public mobileno: number;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiServices: WebservicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
    if (this.mobileno != undefined && this.password != undefined ){
      this.apiServices.presentLoading();
      let data = {
        mobile: this.mobileno,
        password: this.password
      }
      this.apiServices.postLogin(data).then(res => {
        this.apiServices.dismissLoading();
        if(res['status'] == 0) {
          this.navCtrl.push('HomePage', { data: res });
        }
      });
    }
    else {
      alert('Check your Mobile no and Password');
    }
    
  }

  loginwithUID() {

  } 

  signUp() {
    this.navCtrl.push('SignupPage');
  }

  forgetPassword() {
    
  }

}
