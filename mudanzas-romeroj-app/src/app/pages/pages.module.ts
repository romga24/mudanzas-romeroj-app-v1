// pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { WhoWeAreComponent } from './who-we-are/whoweare.component';
import { MudanzasComponent } from './mudanzas/mudanzas.component';
import { MudanzasHogarComponent } from './mudanzas/hogar/mudanzas-hogar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HomeComponent,
    WhoWeAreComponent,
    MudanzasComponent,
    HeaderComponent,
    PagesRoutingModule,
    MudanzasHogarComponent,
    HttpClientModule,
  ]
})
export class PagesModule { }
