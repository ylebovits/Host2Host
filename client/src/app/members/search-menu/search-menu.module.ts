import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMenuPageRoutingModule } from './search-menu-routing.module';

import { SearchMenuPage } from './search-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMenuPageRoutingModule
  ],
  declarations: [SearchMenuPage]
})
export class SearchMenuPageModule {}
