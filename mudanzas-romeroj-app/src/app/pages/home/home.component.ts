import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ChangeDetectorRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruckMoving, faBoxOpen, faTruckRampBox, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    CommonModule, 
    FontAwesomeModule,
    RouterModule,
  ]
})

export class HomeComponent implements AfterViewInit {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  imageHomePath = 'assets/img/imagen-home.jpg';
  logoPath = 'assets/img/logo-mundanzasrj.png';
  faTruckMoving = faTruckMoving;
  faBoxOpen = faBoxOpen;
  faTruckRampBox = faTruckRampBox;
  faFileInvoiceDollar = faFileInvoiceDollar;

  reviews = [
    {
      text: `El proceso de recogida y desmontaje de muebles fue perfecto y eficaz. 
             Lo envalaron todo muy bien y no tuve roturas ni desperfectos al desenvalarlo. 
             Precio asequible y todo quedó muy bien envalado y siempre con disposición de ayudar.
             Los recomiendo sin duda. Muy profesionales.`,
      author: `Mercedes S.`,
      stars: 5
    },
    {
      text: `Hace unos días hicimos el traslado de oficina y fue todo perfecto. 
             Gente muy profesional, no pone pegas a nada, super educados, 
             da gusto trabajar con personas así. Lo recomendamos 100%. y 
             además de su absoluta profesionalidad de los 4 presupuestos 
             que nos pasaron fue el más económico con diferencia.`,
      author: `Adela M.`,
      stars: 5
    },
    {
      text: `Fueron muy profesionales y serviciales en todo momento, 
             me hicieron toda la mudanza sin un solo percance todo según 
             lo previsto Si vuelvo a hacer otra mudanza sin duda contaré con ellos`,
      author: `Maria José G.`,
      stars: 5
    },
    {
      text: `El proceso de recogida y desmontaje de muebles fue perfecto y muy rápido 
             en la entrega y montaje super eficientes. Lo envalaron todo muy bien y no 
             tuve roturas o desperfectos. Precio razonable todo quedo muy bien y siempre
             con disposición de ayudar y dejarlo todo a punto.
             Los recomiendo sin duda.`,
      author: 'Mar P.',
      stars: 5
    },
    {
      text: `He tenido muy buena experiencia con esta empresa. Muy serios y profesionales. Todo llegó perfecto. Recomiendo al 100%`,
      author: 'Patricia de G.',
      stars: 5
    }
  ];

  lugares = [
    { nombre: 'Sierra de Madrid', imagen: 'assets/img/imagenes-lugares-home/sierra-de-madrid.webp' },
    { nombre: 'Alcalá de Henares', imagen: 'assets/img/imagenes-lugares-home/alcala.png' },
    { nombre: 'Aranjuez', imagen: 'assets/img/imagenes-lugares-home/aranjuez.webp' },
    { nombre: 'Torrejón de Ardoz', imagen: 'assets/img/imagenes-lugares-home/torrejon.jpg' },
    { nombre: 'Getafe', imagen: 'assets/img/imagenes-lugares-home/getafe.webp' },
    { nombre: 'Fuencarral-El Pardo', imagen: 'assets/img/imagenes-lugares-home/fuencarral-elpardo.webp' },
    { nombre: 'Colmenar Viejo', imagen: 'assets/img/imagenes-lugares-home/colmenar-viejo.jpg' },
    { nombre: 'Moratalaz', imagen: 'assets/img/imagenes-lugares-home/moratalaz.webp' },
    { nombre: 'Tres Cantos', imagen: 'assets/img/imagenes-lugares-home/trescantos.jpg' },
    { nombre: 'Las Tablas', imagen: 'assets/img/imagenes-lugares-home/lastablas.jpg' },
    { nombre: 'Hortaleza', imagen: 'assets/img/imagenes-lugares-home/hortaleza.jpeg' },
    { nombre: 'Sanchinarro', imagen: 'assets/img/imagenes-lugares-home/sanchinarro.jpg' },
    { nombre: 'Madrid Centro', imagen: 'assets/img/imagenes-lugares-home/madrid-centro.jpg' },
    { nombre: 'Móstoles', imagen: 'assets/img/imagenes-lugares-home/mostoles.jpeg' },
    { nombre: 'Paracuellos de Jarama', imagen: 'assets/img/imagenes-lugares-home/paracuellos.jpg' },
  ];

  visibleCards = 3;
  extendedReviews: any[] = [];
  currentIndex = 0;
  cardWidth = 0;
  translateX = 0;
  transitionEnabled = true;
  isMobile: boolean = false;
  currentPage = 1;
  itemsPerPage = 9;
  isBrowser: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 640;
      this.prepareCarousel();
      this.calculateCardWidth();
      this.cdr.detectChanges();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 640;
      this.calculateCardWidth();
      this.updateTranslateX();
    }
  }

  prepareCarousel() {
    const len = this.reviews.length;
    const head = this.reviews.slice(len - this.visibleCards);
    const tail = this.reviews.slice(0, this.visibleCards);
    this.extendedReviews = [...head, ...this.reviews, ...tail];
    this.currentIndex = this.visibleCards;
    this.updateTranslateX();
  }

  calculateCardWidth() {
    const wrapper = this.carouselWrapper?.nativeElement;
    if (wrapper) {
      const totalWidth = wrapper.offsetWidth;
      this.cardWidth = totalWidth / this.visibleCards;
      this.updateTranslateX();
    }
  }

  updateTranslateX() {
    this.translateX = this.cardWidth * this.currentIndex;
  }

  next() {
    this.transitionEnabled = true;
    this.currentIndex++;
    this.updateTranslateX();

    if (this.currentIndex >= this.extendedReviews.length - this.visibleCards) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.visibleCards;
        this.updateTranslateX();
      }, 500);
    }
  }

  prev() {
    this.transitionEnabled = true;
    this.currentIndex--;
    this.updateTranslateX();

    if (this.currentIndex < 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.extendedReviews.length - this.visibleCards * 2;
        this.updateTranslateX();
      }, 500);
    }
  }

  getStars(count: number): any[] {
    return Array(count);
  }

  get totalPages(): number {
    return Math.ceil(this.lugares.length / this.itemsPerPage);
  }

  get paginatedLugares() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.lugares.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  goPresupuesto() {
    this.router.navigate(['/solicitar-presupuesto']);
  }
}
