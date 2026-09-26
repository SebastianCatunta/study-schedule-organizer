import { Routes } from '@angular/router';
import { MateriaListComponent } from './app/materia/components/materia-list.component';
import { MateriaFormComponent } from './app/materia/components/materia-form.component';
import { MateriaDetailComponent } from './app/materia/components/materia-detail.component';

export const routes: Routes = [
  { path: 'materias', component: MateriaListComponent },
  { path: 'materias/nueva', component: MateriaFormComponent },
  { path: 'materias/:id/editar', component: MateriaFormComponent },
  { path: 'materias/:id', component: MateriaDetailComponent },
];
