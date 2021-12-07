import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book1Page } from './book1.page';

const routes: Routes = [
  {
    path: '',
    component: Book1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book1PageRoutingModule {}
