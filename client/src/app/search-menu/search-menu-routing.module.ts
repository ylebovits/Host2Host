import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMenuPage } from './search-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMenuPageRoutingModule {}
