import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentDescriptionPage } from './assignment-description';

@NgModule({
  declarations: [
    AssignmentDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentDescriptionPage),
  ],
})
export class AssignmentDescriptionPageModule {}
