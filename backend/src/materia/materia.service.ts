import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(private readonly prisma: PrismaService) {}

  create(userId: number, dto: CreateMateriaDto) {
    return this.prisma.materia.create({ data: { ...dto, userId } }).catch((error: { code?: string }) => {
      if (error.code === 'P2002') throw new ConflictException('El código ya está registrado');
      throw error;
    });
  }

  findAll(userId: number) { return this.prisma.materia.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } }); }

  async findOne(userId: number, id: number) {
    const materia = await this.prisma.materia.findFirst({ where: { id, userId } });
    if (!materia) throw new NotFoundException('Materia no encontrada');
    return materia;
  }

  async update(userId: number, id: number, dto: UpdateMateriaDto) {
    await this.findOne(userId, id);
    return this.prisma.materia.update({ where: { id }, data: dto }).catch((error: { code?: string }) => {
      if (error.code === 'P2002') throw new ConflictException('El código ya está registrado');
      throw error;
    });
  }

  async remove(userId: number, id: number) {
    await this.findOne(userId, id);
    return this.prisma.materia.delete({ where: { id } });
  }
}
