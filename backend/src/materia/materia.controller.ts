import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { MateriaService } from './materia.service';

type AuthenticatedRequest = Request & { user: { userId: number } };

@Controller('materia')
@UseGuards(JwtAuthGuard)
export class MateriaController {
  constructor(private readonly service: MateriaService) {}
  @Post() create(@Req() req: AuthenticatedRequest, @Body() dto: CreateMateriaDto) { return this.service.create(req.user.userId, dto); }
  @Get() findAll(@Req() req: AuthenticatedRequest) { return this.service.findAll(req.user.userId); }
  @Get(':id') findOne(@Req() req: AuthenticatedRequest, @Param('id', ParseIntPipe) id: number) { return this.service.findOne(req.user.userId, id); }
  @Patch(':id') update(@Req() req: AuthenticatedRequest, @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMateriaDto) { return this.service.update(req.user.userId, id, dto); }
  @Delete(':id') remove(@Req() req: AuthenticatedRequest, @Param('id', ParseIntPipe) id: number) { return this.service.remove(req.user.userId, id); }
}
