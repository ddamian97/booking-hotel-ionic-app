import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DataResolverService} from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelPageModule)
  },
  {
    path: 'tab3/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'book1',
    loadChildren: () => import('./book/book1/book1.module').then( m => m.Book1PageModule)
  },
  {
    path: 'book1/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./book/book1/book1.module').then(m => m.Book1PageModule)
  },
  {
    path: 'book2',
    loadChildren: () => import('./book/book2/book2.module').then( m => m.Book2PageModule)
  },
  {
    path: 'book-confirm',
    loadChildren: () => import('./book/book-confirm/book-confirm.module').then( m => m.BookConfirmPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
