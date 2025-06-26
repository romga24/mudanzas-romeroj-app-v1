import {
  Component,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FontAwesomeModule
  ]
})
export class ContactoComponent implements OnInit {

  contactoImagenPath = 'assets/img/furgoneta.jpg'; // <- usa esta en el banner

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
