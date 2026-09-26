import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateEntityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name!: string;

  @IsOptional()
  @IsInt()
  userId?: number;
}

export class UpdateEntityDto {
  @IsOptional()
  @IsString()
  @MaxLength(120)
  name?: string;
}
