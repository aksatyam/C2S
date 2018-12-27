import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map";

/*
  Generated class for the WebservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebservicesProvider {
  public loading: any;
  public BASE_URL: string = 'http://staging.c2sbook.org/c2s/';
  public data: any;
  public headers: any;
  public options: any;
  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello WebservicesProvider Provider');

    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Origin' , '*');
    this.headers.append('Access-Control-Allow-Headers', 'content-type');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.headers.append('Content-Type','application/json');
  }

  presentLoading() {
   this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();

  }

  dismissLoading() {
    this.loading.dismiss();
 
  }

  postLogin(data) {
    if (data && data['mobile'] != null) {
      data = {
        "byteImage":null,
        "categoryId":null,
        "dealId":null,
        "deviceId":"5c0a774fe4b0c52289470a26",
        "favouriteDealId":null,
        "favouriteStoreId":null,
        "language":"en",
        "lat":"28.6295509",
        "lon":"77.3769583",
        "mobile":"8285604315",
        "password":null,
        "pwd":"puarsVPRq/Ps83aRv4m3/Q==",
        "requestType":0,
        "role":null,
        "userCategory":null,
        "userDistance":0.0,
        "userId":null,
        "userNotification":false,
        "venderId":null
      }
    }
    else {
      data = {
        "byteImage":null,
        "categoryId":null,
        "dealId":null,
        "deviceId":"5c0a774fe4b0c52289470a26",
        "favouriteDealId":null,
        "favouriteStoreId":null,
        "language":"en",
        "lat":"28.6295509",
        "lon":"77.3769583",
        "mobile":data['mobile'],
        "password":data['password'],
        "pwd":"puarsVPRq/Ps83aRv4m3/Q==",
        "requestType":0,
        "role":null,
        "userCategory":null,
        "userDistance":0.0,
        "userId":null,
        "userNotification":false,
        "venderId":null
      }
    }
    let url = `${this.BASE_URL}user/rest/login`;
    return new Promise(resolve => {
      this.http.post(url, data, { headers: this.headers}).subscribe(res => {
        this.data = res
        resolve(this.data);
      }, err => {
        console.log(err);
        resolve(err);
      })
    })
  }

}
