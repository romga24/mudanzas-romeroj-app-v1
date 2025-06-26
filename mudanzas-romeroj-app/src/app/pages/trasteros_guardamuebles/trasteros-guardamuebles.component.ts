import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trasteros-guardamuebles',
  templateUrl: './trasteros-guardamuebles.component.html',
  styleUrls: ['./trasteros-guardamuebles.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
})
export class TrasterosGuardamueblesComponent implements OnInit {

  // Imágenes específicas para guardamuebles
  seccionGuarmueblesImagen = 'assets/img/camion-mudanza.jpg';
  guarmueblesImagenUno = 'assets/img/guardamueble.jpg';
  guarmueblesImagenDos = 'assets/img/guarmuebles-dos.jpg';
  iconElevador = 'assets/icons/montacargas.svg';
  iconCamion = 'assets/icons/camion.svg';
  guarmueblesImagenAntes = 'assets/img/guarmuebles-antes.jpg';
  guarmueblesImagenDespues = 'assets/img/guarmuebles-despues.jpg';

  constructor() {}

  ngOnInit(): void {
    // Aquí se podría incluir lógica futura
  }
}
