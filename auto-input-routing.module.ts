import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoInputPage } from './auto-input.page';

const routes: Routes = [
  {
    path: '',
    component: AutoInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoInputPageRoutingModule {}
