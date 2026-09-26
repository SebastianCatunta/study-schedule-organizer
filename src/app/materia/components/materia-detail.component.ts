import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { MateriaService } from '../services/materia.service';

@Component({ selector: 'app-materia-detail', standalone: true, imports: [AsyncPipe, NgIf, RouterLink], template: `<main *ngIf="materia$ | async as materia"><h1>{{ materia.nombre }}</h1><p>Código: {{ materia.codigo }}</p><p>Créditos: {{ materia.creditos }}</p><a [routerLink]="['/materias', materia.id, 'editar']">Editar</a></main>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MateriaDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(MateriaService);
  readonly materia$ = this.route.paramMap.pipe(switchMap((params) => this.service.findOne(Number(params.get('id')))));
}
