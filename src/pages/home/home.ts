import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public UserData: any;
  constructor(public navCtrl: NavController, public navParms: NavParams) {
    
    if(this.navParms.get('data')){
      this.UserData = JSON.stringify(this.navParms.get('data'));
      console.log(this.UserData)
    }

  }

}
