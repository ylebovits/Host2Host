import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dashboardPage } from './dashboard.page';

import { dashboardPageRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    dashboardPageRoutingModule
  ],
  declarations: [dashboardPage]
})
export class dashboardPageModule {}
