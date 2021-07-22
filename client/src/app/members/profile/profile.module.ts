import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { profilePage } from './profile.page';

import { profilePageRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: profilePage }]),
    profilePageRoutingModule,
  ],
  declarations: [profilePage]
})
export class profilePageModule {}
