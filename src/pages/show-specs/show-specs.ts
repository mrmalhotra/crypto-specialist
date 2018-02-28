import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

/**
 * Generated class for the ShowSpecsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-specs',
  templateUrl: 'show-specs.html',
})
export class ShowSpecsPage {
  currentCValue:string;
  value:string;
  markets:any[] = [];
  interval:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowSpecsPage');
    this.value = this.navParams.get('code');
    this.http.get('https://api.cryptonator.com/api/full/'+this.value+'-usd').map(res=>res.json())
      .subscribe(data=>{
        console.log('got the value ',data);

        if(!data.success){
          this.currentCValue = 'No Data';
          this.markets = [];
        }else{
          this.currentCValue = data.ticker.price +' USD';
          this.markets = data.ticker.markets;
        }

        // this.startCountDown();
      });


  }

    // startCountDown = function(){
    //   console.log('in start')
    //   this.interval = setInterval(function () {
    //     },10000);
    // }
    //
    // ionViewDidLeave(){
    //   clearInterval(this.interval);
    // }
}
