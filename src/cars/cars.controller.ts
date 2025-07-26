import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

@Controller('cars')
export class CarsController {
  // Initialization of the cars array

  constructor(private readonly carsService: CarsService) {}

  // GET /cars
  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  // GET /cars/:id
  @Get(':id')
  // Using ParseIntPipe to automatically convert 'id' to a number and handle invalid input
  // Specify return type as Car, as NotFoundException will handle cases where it's not found
  getCarById(@Param('id', ParseIntPipe) id: number): Car {
    return this.carsService.findOne(id);
  }
}
