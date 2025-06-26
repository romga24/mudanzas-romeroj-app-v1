import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mudanzas-hogar',
  templateUrl: './mudanzas-hogar.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
})
export class MudanzasHogarComponent implements OnInit {

  // Imágenes específicas para hogar
  seccionHogarImagen = 'assets/img/fondo-seccion.jpg';
  mudanzasHogarImagenUno = 'assets/img/imagen-casa-embalada.jpg';
  mudanzasHogarImagenDos = 'assets/img/mudanzas-hogar-uno.jpg';
  iconElevador = 'assets/icons/montacargas.svg';
  iconCamion = 'assets/icons/camion.svg';
  mudanzasHogarImagenAntes = 'assets/img/mudanzas-hogar-antes.jpg';
  mudanzasHogarImagenDespues = 'assets/img/mudanza-hogar-despues.jpg';
  sliderValue: number = 50;

  constructor() {}

  ngOnInit(): void {
    // Aquí se podría incluir lógica futura
  }
}
