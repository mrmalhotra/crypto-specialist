import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ShowSpecsPage} from "../show-specs/show-specs";

/**
 * Generated class for the ListOfCurrenciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-currencies',
  templateUrl: 'list-of-currencies.html',
})
export class ListOfCurrenciesPage {

  count:number = 0;
  wannaLoad:boolean = true;
  people: any[] = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get('https://www.cryptonator.com/api/currencies').map(res=>res.json())
      .subscribe(data=>{
        this.wannaLoad = false;
        console.log('data is ',data)
        for (let i = 0; i < 30; i++) {
          this.people.push( data.rows[i]);
          this.count++;
          // console.log('value of count ',this.count)
        }
      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfCurrenciesPage');

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.http.get('https://www.cryptonator.com/api/currencies').map(res=>res.json())
      .subscribe(data=>{
        console.log('data is ',data)
        setTimeout(() => {
          for (let i = this.count; i < this.count+30; i++) {
            this.people.push( data.rows[i]);
          }
          this.count += 30;
          // console.log('value of count ',this.count)
          // console.log('Async operation has ended');
          infiniteScroll.complete();
        }, 500);
      })
  }

  ionViewDidLeave(){
    console.log('leave the view');
    this.count = 0;
  }

  getItems(ev:any){
    let val = ev.target.value;
    console.log('var is ',val);

    this.http.get('https://www.cryptonator.com/api/currencies').map(res=>res.json())
      .subscribe(data=>{
        if (val && val.trim() != '') {
          this.people = data.rows.filter((item) => {
            console.log('got the value ',item.name);
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      })
  }

  getSome(value){
    console.log('hey there',value)
    this.navCtrl.push(ShowSpecsPage,{code:value.code});
  }

}
