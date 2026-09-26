import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { apiUrl } from '../../../main';
import { Materia, MateriaPayload } from '../models/materia.model';

@Injectable({ providedIn: 'root' })
export class MateriaService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${apiUrl}/materia`;
  private handleError(error: HttpErrorResponse) { return throwError(() => new Error(error.error?.message ?? 'No se pudo completar la operación')); }
  findAll(): Observable<Materia[]> { return this.http.get<Materia[]>(this.endpoint).pipe(catchError((e) => this.handleError(e))); }
  findOne(id: number): Observable<Materia> { return this.http.get<Materia>(`${this.endpoint}/${id}`).pipe(catchError((e) => this.handleError(e))); }
  create(payload: MateriaPayload): Observable<Materia> { return this.http.post<Materia>(this.endpoint, payload).pipe(catchError((e) => this.handleError(e))); }
  update(id: number, payload: MateriaPayload): Observable<Materia> { return this.http.patch<Materia>(`${this.endpoint}/${id}`, payload).pipe(catchError((e) => this.handleError(e))); }
  remove(id: number): Observable<Materia> { return this.http.delete<Materia>(`${this.endpoint}/${id}`).pipe(catchError((e) => this.handleError(e))); }
}
