import {
  IsString,
  IsInt,
  IsUUID,
  IsNotEmpty,
  IsPositive,
  IsEmail,
  IsOptional,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateEncuesSatisIlfornoDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly puntoVenta: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly calificaProducto: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly calificaServicio: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly calificaNps: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly mejora: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly nota: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly nombre: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly apellido: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  readonly cedula: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  readonly celular: number;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  readonly email: string;
}
