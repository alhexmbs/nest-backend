import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import type { ICar } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  // Initialization of the cars array

  constructor(private readonly carsService: CarsService) {}

  // GET /cars
  @Get()
  getAllCars(): ICar[] {
    return this.carsService.findAll();
  }

  // GET /cars/:id
  @Get(':id')
  // Using ParseUUIDPipe to automatically convert 'id' to a UUID and handle invalid input
  // Specify return type as Car, as NotFoundException will handle cases where it's not found
  getCarById(@Param('id', ParseUUIDPipe) id: string): ICar {
    return this.carsService.findOne(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto): ICar {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
