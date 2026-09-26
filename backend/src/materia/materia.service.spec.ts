import { MateriaService } from './materia.service';

describe('MateriaService', () => {
  it('findOne throws when the materia does not belong to the user', async () => {
    const prisma = { materia: { findFirst: jest.fn().mockResolvedValue(null) } } as any;
    await expect(new MateriaService(prisma).findOne(1, 99)).rejects.toThrow('Materia no encontrada');
  });
});
