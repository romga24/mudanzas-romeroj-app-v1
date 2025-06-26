import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mudanzas-oficina',
  templateUrl: './mudanzas-oficina.component.html',
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
export class MudanzasOficinaComponent implements OnInit {

  // Imágenes específicas para oficina
  seccionOficinaImagen = 'assets/img/seccion-oficina.jpg';
  mudanzasOficinaImagenUno = 'assets/img/mudanzas-oficina-uno.jpg';
  mudanzasOficinaImagenDos = 'assets/img/mudanzas-oficina-dos.jpg';
  mudanzasOficinaImagenTres = 'assets/img/mudanzas-oficina-tres.jpg';

  constructor() {}

  ngOnInit(): void {
    // Aquí se podría incluir lógica futura
  }
}
