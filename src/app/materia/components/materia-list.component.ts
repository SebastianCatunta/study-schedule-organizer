import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MateriaService } from '../services/materia.service';

@Component({ selector: 'app-materia-list', standalone: true, imports: [AsyncPipe, NgFor, NgIf, RouterLink], template: `<main><h1>Materias</h1><a routerLink="/materias/nueva">Nueva materia</a><p *ngIf="materias$ | async as materias; else loading"><span *ngFor="let materia of materias"><a [routerLink]="['/materias', materia.id]">{{ materia.codigo }} - {{ materia.nombre }} ({{ materia.creditos }} créditos)</a><br /></span></p><ng-template #loading>Cargando...</ng-template></main>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class MateriaListComponent {
  readonly materias$ = inject(MateriaService).findAll().pipe(catchError(() => of([])));
}
