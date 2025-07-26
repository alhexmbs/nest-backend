import { Injectable, NotFoundException } from '@nestjs/common';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'ABC', year: 2015 },
    { id: 2, brand: 'Nissan', model: 'DEF', year: 2016 },
    { id: 3, brand: 'Mercedes', model: 'GHI', year: 2017 },
  ];

  public findAll() {
    return this.cars;
  }

  public findOne(id: number) {
    const carFinder = this.cars.find((car) => car.id === id);

    if (!carFinder) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return carFinder;
  }
}
