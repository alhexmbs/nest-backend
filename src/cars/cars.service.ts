import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { ICar } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private readonly cars: ICar[] = [
    { id: uuid(), brand: 'Toyota', model: 'ABC', year: 2015 },
    { id: uuid(), brand: 'Nissan', model: 'DEF', year: 2016 },
    { id: uuid(), brand: 'Mercedes', model: 'GHI', year: 2017 },
  ];

  public findAll(): ICar[] {
    return this.cars;
  }

  public findOne(id: string): ICar {
    const carFinder = this.cars.find((car) => car.id === id);

    if (!carFinder) throw new NotFoundException(`Car with id ${id} not found`);

    return carFinder;
  }

  public createCar(createCarDto: CreateCarDto): ICar {
    const existingCar: ICar | undefined = this.cars.find(
      (car: ICar) => car.id === createCarDto.id,
    );

    if (existingCar) {
      throw new ConflictException(
        `Car with ID "${createCarDto.id}" already exists.`,
      );
    }

    const newCar: ICar = {
      id: createCarDto.id,
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year,
    };

    this.cars.push(newCar);

    return newCar;
  }
}
