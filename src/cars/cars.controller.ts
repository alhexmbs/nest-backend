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
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  // Initialization of the car array
  constructor(private readonly carsService: CarsService) {}

  // GET /cars
  @Get()
  getAllCars(): ICar[] {
    return this.carsService.findAll();
  }

  // GET /cars/:id
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string): ICar {
    // Using ParseUUIDPipe to automatically convert 'id' to a UUID and handle invalid input
    return this.carsService.findOne(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto): ICar {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ): ICar {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
