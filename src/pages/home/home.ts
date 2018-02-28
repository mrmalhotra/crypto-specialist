import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListOfCurrenciesPage} from "../list-of-currencies/list-of-currencies"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goForList(){
    // console.log('get them all');
    this.navCtrl.push(ListOfCurrenciesPage)
  }
}
