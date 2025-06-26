import {
  Component,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faTruckMoving,
  faShieldHalved,
  faTruckRampBox,
  faBoxOpen,
  faWarehouse,
  faBullseye,
  faEye,
  faHeart,
  faGlobeEurope,
  faFileInvoiceDollar,
  faBriefcase, 
  faShieldAlt, 
  faTruck,
  faRoad,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css'],
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    CommonModule,
    FontAwesomeModule,
  ]
})

export class WhoWeAreComponent implements OnInit {

  imageHomePath = 'assets/img/imagen-home.jpg';
  imageCamionPath = 'assets/img/imagen-camion.jpg';
  quienesSomosImagenPath = 'assets/img/quienes-somos.jpg';
  compromisoImagenPath = 'assets/img/compromiso.jpg';
  // Iconos FontAwesome
  faWarehouse = faWarehouse;
  faTruckMoving = faTruckMoving;
  faShieldHalved = faShieldHalved;
  faTruckRampBox = faTruckRampBox;
  faBoxOpen = faBoxOpen;
  faBullseye = faBullseye;
  faEye = faEye;
  faHeart = faHeart;
  faGlobeEurope = faGlobeEurope;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faBriefcase = faBriefcase;
  faShieldAlt = faShieldAlt;
  faTruck = faTruck;
  faRoad = faRoad;
  faGlobe = faGlobe; 
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
   
  }
}
