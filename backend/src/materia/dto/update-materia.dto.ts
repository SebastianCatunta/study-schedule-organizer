import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class UpdateMateriaDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  nombre?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  codigo?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  creditos?: number;
}
