import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookConfirmPageRoutingModule } from './book-confirm-routing.module';

import { BookConfirmPage } from './book-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookConfirmPageRoutingModule
  ],
  declarations: [BookConfirmPage]
})
export class BookConfirmPageModule {}
