import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/whoweare.component';
import { MudanzasComponent } from './mudanzas/mudanzas.component';
import { MudanzasHogarComponent } from './mudanzas/hogar/mudanzas-hogar.component';
import { MudanzasOficinaComponent } from './mudanzas/oficina/mudanzas-oficina.component';
import { TrasterosGuardamueblesComponent } from './trasteros_guardamuebles/trasteros-guardamuebles.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quienes-somos',
    component: WhoWeAreComponent
  },
  {
    path: 'guardamuebles',
    component: TrasterosGuardamueblesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'solicitar-presupuesto',
    component: PresupuestoComponent
  },
  {
    path: '',
    children: [
      {
        path: 'mudanzas',
        component: MudanzasComponent
      },
      {
        path: 'mudanzas/hogar',
        component: MudanzasHogarComponent
      },  
      {
        path: 'mudanzas/oficina',
        component: MudanzasOficinaComponent
      },
      {
        path: '',
        redirectTo: 'mudanzas/hogar',
        pathMatch: 'full'
      }
    ],
    
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
