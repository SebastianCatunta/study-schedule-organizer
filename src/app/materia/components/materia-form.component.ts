import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaService } from '../services/materia.service';

@Component({ selector: 'app-materia-form', standalone: true, imports: [ReactiveFormsModule], template: `<main><h1>{{ id ? 'Editar' : 'Nueva' }} materia</h1><form [formGroup]="form" (ngSubmit)="submit()"><label>Nombre<input formControlName="nombre" /></label><label>Código<input formControlName="codigo" /></label><label>Créditos<input type="number" formControlName="creditos" /></label><button type="submit" [disabled]="form.invalid">Guardar</button></form></main>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MateriaFormComponent {
  private readonly fb = inject(FormBuilder); private readonly service = inject(MateriaService); private readonly router = inject(Router); private readonly route = inject(ActivatedRoute);
  readonly id = Number(this.route.snapshot.paramMap.get('id')) || null;
  readonly form = this.fb.nonNullable.group({ nombre: ['', [Validators.required, Validators.maxLength(120)]], codigo: ['', [Validators.required, Validators.maxLength(30)]], creditos: [1, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]] });
  submit(): void { if (this.form.invalid) return; const payload = this.form.getRawValue(); const operation = this.id ? this.service.update(this.id, payload) : this.service.create(payload); operation.subscribe(() => this.router.navigate(['/materias'])); }
}
