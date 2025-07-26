import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsString()
  readonly model: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  readonly year: number;
}
