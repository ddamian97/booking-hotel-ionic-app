import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book2Page } from './book2.page';

const routes: Routes = [
  {
    path: '',
    component: Book2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book2PageRoutingModule {}
