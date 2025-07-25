import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private readonly cars = ['Toyota', 'Honda', 'anything'];

  @Get()
  getAllCars() {
    return this.cars;
  }
}
