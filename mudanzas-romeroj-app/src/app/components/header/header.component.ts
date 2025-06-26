import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    FontAwesomeModule, 
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  logoPath = 'assets/img/logo-mundanzasrj.png';
  menuAbierto = false;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;

  isSubmenuOpen = false;
  isMobileView = false;
  submenuAbierto = false;
  private timeoutId: any;
  private isBrowser: boolean = false;

  constructor(
    public router: Router, // <--- público para usar en HTML
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.checkScreenWidth();
      window.addEventListener('resize', this.checkScreenWidth.bind(this));
    }
  }

  checkScreenWidth() {
    if (this.isBrowser) {
      this.isMobileView = window.innerWidth < 768; // Tailwind 'md' breakpoint
      if (!this.isMobileView) {
        this.isSubmenuOpen = false;
      }
    }
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleSubmenu() {
    if (this.isMobileView) {
      this.isSubmenuOpen = !this.isSubmenuOpen;
    }
  }

  goInicio() {
    this.router.navigate(['/']);
  }

  goWhoWeAre() {
    this.router.navigate(['/quienes-somos']);
  }

  goServicios() {
    this.router.navigate(['/services']);
  }

  goGuardamuebles() {
    this.router.navigate(['/guardamuebles']);
  }

  goContacto() {
    this.router.navigate(['/contacto']);
  }

  goFAQ() {
    this.router.navigate(['/faq']);
  }

  goMudanzas() {
    this.router.navigate(['/mudanzas']);
  }

  goPresupuesto() {
    this.router.navigate(['/solicitar-presupuesto']);
  }

  goMudanzasHogar() {
    this.router.navigate(['/mudanzas', 'hogar']);
  }

  goMudanzasEmpresa() {
    this.router.navigate(['/mudanzas', 'oficina']);
  }

  openSubmenu() {
    clearTimeout(this.timeoutId);
    this.submenuAbierto = true;
  }

  closeSubmenu() {
    this.timeoutId = setTimeout(() => {
      this.submenuAbierto = false;
    }, 600);
  }

  cancelCloseSubmenu() {
    clearTimeout(this.timeoutId);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  startsWith(routePrefix: string): boolean {
    return this.router.url.startsWith(routePrefix);
  }
}
