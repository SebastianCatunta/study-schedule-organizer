import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';

@Injectable()
export class EntityService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateEntityDto) { return this.prisma.entity.create({ data: dto }); }
  findAll() { return this.prisma.entity.findMany({ orderBy: { createdAt: 'desc' } }); }
  async findOne(id: number) {
    const item = await this.prisma.entity.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Entity not found');
    return item;
  }
  async update(id: number, dto: UpdateEntityDto) { await this.findOne(id); return this.prisma.entity.update({ where: { id }, data: dto }); }
  async remove(id: number) { await this.findOne(id); return this.prisma.entity.delete({ where: { id } }); }
}
