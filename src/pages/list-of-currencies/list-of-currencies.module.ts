import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfCurrenciesPage } from './list-of-currencies';

@NgModule({
  declarations: [
    ListOfCurrenciesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfCurrenciesPage),
  ],
})
export class ListOfCurrenciesPageModule {}
