import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: dashboardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardPageRoutingModule {}
