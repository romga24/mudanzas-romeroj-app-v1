import {
  Component,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Presupuesto } from '../../types/Presupuesto';
import { PresupuestoService } from '../../services/presupuesto.service'; 
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class PresupuestoComponent implements OnInit {

  imagenFormulario = 'assets/img/imagen-formulario.jpg';
  presupuestoForm!: FormGroup;
  formEnviadoCorrectamente: boolean = false;
  minDate: string = '';

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private presupuestoService: PresupuestoService
  ) { }

  ngOnInit(): void {

    const hoy = new Date();
    const year = hoy.getFullYear();
    const month = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const day = hoy.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;

    this.presupuestoForm = this.fb.group({
      tipoServicio: ['', Validators.required],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
        ]
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{9,15}$/)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required, this.fechaPosteriorAHoyValidator()]],
      direccionOrigen: [
        '',
        [
          Validators.required
        ]
      ],
      direccionDestino: [
        '',
        [
          Validators.required
        ]
      ],
      consulta: [
        '',
        [
          Validators.maxLength(500),
          Validators.pattern(/^$|^.{10,}$/) // Opcional, pero si se rellena, mínimo 10 caracteres
        ]
      ],
      politicaPrivacidad: [false, Validators.requiredTrue]
    });
  }

  fechaPosteriorAHoyValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null; // Deja que el 'required' lo controle
    }

    // Parsear fecha manualmente para evitar problemas de zona horaria
    const partes = control.value.split('-');
    if (partes.length !== 3) {
      return { fechaInvalida: true };
    }

    const year = parseInt(partes[0], 10);
    const month = parseInt(partes[1], 10) - 1; // Mes base 0
    const day = parseInt(partes[2], 10);

    const fechaSeleccionada = new Date(year, month, day);
    const hoy = new Date();

    // Quitar horas a ambas fechas
    hoy.setHours(0, 0, 0, 0);
    fechaSeleccionada.setHours(0, 0, 0, 0);

    return fechaSeleccionada >= hoy ? null : { fechaPasada: true };
  };
}


  onSubmit(): void {
  if (this.presupuestoForm.valid) {
    const tiposServicioMap: { [key: string]: string } = {
      hogar: 'Hogar',
      empresa: 'Empresa/Oficina',
      porte: 'Porte o traslado'
    };

    const raw = this.presupuestoForm.value;

    const datos: Presupuesto = {
      ...raw,
      tipoServicio: tiposServicioMap[raw.tipoServicio] || ''
    };

    this.formEnviadoCorrectamente = true;
    this.cdr.detectChanges();

    this.presupuestoService.enviarPresupuesto(datos).subscribe({
      next: response => {
        console.log('Formulario enviado correctamente', response);
        this.presupuestoForm.reset();
        this.cdr.detectChanges();

        setTimeout(() => {
          this.formEnviadoCorrectamente = false;
          this.cdr.detectChanges();

          // Recargar la página
          window.location.reload();
        }, 5000); // Espera 5 segundos antes de recargar
      },

      error: error => {
        console.error('Error al enviar el formulario', error);
        this.formEnviadoCorrectamente = false;
        this.cdr.detectChanges();
      }
    });
  } else {
    this.presupuestoForm.markAllAsTouched();
  }
}

}
