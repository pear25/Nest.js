import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from 'src/types/dog.type';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}
  @Get()
  getDogs() {
    return this.dogsService.getAllDogs();
  }
  @Post()
  postDog(@Body() dog: Dog) {
    return this.dogsService.createDog(dog);
  }

  @Put()
  updateDog(@Body() dog: Dog) {
    return this.dogsService.updateDog(dog);
  }

  @Delete(':id')
  deleteDog(@Param('id') id: number) {
    return this.dogsService.deleteDog(id);
  }
}
