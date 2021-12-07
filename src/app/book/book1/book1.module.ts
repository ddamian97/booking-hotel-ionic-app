import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book1PageRoutingModule } from './book1-routing.module';

import { Book1Page } from './book1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Book1PageRoutingModule
  ],
  declarations: [Book1Page]
})
export class Book1PageModule {}
