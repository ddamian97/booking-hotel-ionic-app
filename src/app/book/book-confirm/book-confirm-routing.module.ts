import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookConfirmPage } from './book-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: BookConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookConfirmPageRoutingModule {}
