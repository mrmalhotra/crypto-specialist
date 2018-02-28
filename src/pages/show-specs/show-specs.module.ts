import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowSpecsPage } from './show-specs';

@NgModule({
  declarations: [
    ShowSpecsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowSpecsPage),
  ],
})
export class ShowSpecsPageModule {}
