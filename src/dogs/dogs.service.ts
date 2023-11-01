import { Injectable } from '@nestjs/common';
import { Dog } from 'src/types/dog.type';
import { mockDogs } from './mock/dogs.mock';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = mockDogs;
  private isUnique(id: number) {
    const unique = this.dogs.find((dog) => dog.id === id);
    return !unique;
  }
  getAllDogs(): Dog[] {
    return this.dogs;
  }

  createDog(dog: Dog) {
    if (!this.isUnique(dog.id)) return 'no';
    this.dogs.push(dog);
    return `Dog with following id: ${dog.id} is added.`;
  }

  updateDog(updatedDog: Dog) {
    const { name, breed, id, age } = updatedDog;
    const updateIdx = this.dogs.findIndex((dog) => dog.id === id);
    if (updateIdx === -1) return `Dog with following id: ${id} is not found.`;
    this.dogs[updateIdx] = {
      ...this.dogs[updateIdx],
      name: name,
      breed: breed,
      age: age,
    };
    return `Update successful`;
  }

  deleteDog(id: number) {
    const deleteDog = this.dogs.find((dog) => dog.id === id);
    return this.dogs.splice(this.dogs.indexOf(deleteDog), 1);
  }
}
