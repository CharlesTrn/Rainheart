import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZonePage } from './zone';

@NgModule({
  declarations: [
    ZonePage
  ],
  imports: [
    IonicPageModule.forChild(ZonePage),
  ],
})
export class ZonePageModule {}
