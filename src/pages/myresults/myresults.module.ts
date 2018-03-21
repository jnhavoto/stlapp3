import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyresultsPage } from './myresults';

@NgModule({
  declarations: [
    MyresultsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyresultsPage),
  ],
})
export class MyresultsPageModule {}
