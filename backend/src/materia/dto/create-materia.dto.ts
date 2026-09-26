import { IsInt, IsNotEmpty, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  codigo!: string;

  @IsInt()
  @IsPositive()
  creditos!: number;
}
