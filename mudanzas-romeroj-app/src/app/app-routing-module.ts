import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  // Puedes añadir más rutas para admin, auth, etc.
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // <- Aquí está la clave
  anchorScrolling: 'enabled', // opcional, para que haga scroll a anclas
  scrollOffset: [0, 0], // opcional, offset en x,y
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
