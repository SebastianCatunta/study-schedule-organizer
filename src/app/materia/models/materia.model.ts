export interface Materia {
  id: number;
  nombre: string;
  codigo: string;
  creditos: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export type MateriaPayload = Pick<Materia, 'nombre' | 'codigo' | 'creditos'>;
