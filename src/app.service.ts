import { Injectable, Param } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  generateFakeData(dataSize: number) {
    const arr = [];
    for (let i = 0; i <= dataSize; i++) {
      const idx = i;
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const phoneNumber = faker.phone.phoneNumber();
      const street = faker.address.streetAddress();
      const city = faker.address.city();
      const state = faker.address.stateAbbr();
      const zipCode = faker.address.zipCode();
      const data = {
        idx: idx,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
      };
      arr.push(data);
      if (i === dataSize - 1) {
        return arr;
      }
    }
  }
}
