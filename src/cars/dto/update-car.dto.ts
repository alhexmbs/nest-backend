import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly year?: number;
}
