import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FalePage } from './fale';

@NgModule({
  declarations: [
    FalePage,
  ],
  imports: [
    IonicPageModule.forChild(FalePage),
  ],
})
export class FalePageModule {}
