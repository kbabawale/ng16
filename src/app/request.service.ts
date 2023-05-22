import { Injectable } from '@angular/core';

export interface Animal {
  name: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}

  readonly animals: Animal[] = [
    {
      name: 'dog',
      color: 'blue',
    },
    {
      name: 'cat',
      color: 'green',
    },
    {
      name: 'lion',
      color: 'yellow',
    },
  ];

  getAnimals() {
    return this.animals;
  }
}
