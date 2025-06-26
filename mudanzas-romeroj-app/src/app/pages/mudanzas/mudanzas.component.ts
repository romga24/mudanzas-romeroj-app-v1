import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import {
  faHouse,
  faBuilding,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mudanzas',
  templateUrl: './mudanzas.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    RouterModule,
  ]
})
export class MudanzasComponent implements OnInit {

  faHouse = faHouse;
  faBuilding = faBuilding;
  faBoxOpen = faBoxOpen;

  constructor() {}

  ngOnInit(): void {}
}
