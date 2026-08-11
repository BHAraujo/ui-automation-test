import { faker } from '@faker-js/faker';


class FakerDataGenerator {
  generateRandomName(): string {
    return faker.person.fullName(); 
  }

  generateRandomEmail(): string {
    return faker.internet.email(); 
  }

  generateRandomPhone(): string {
    return faker.phone.number(); 
  }

  generateRandomAddress(): string {
    return faker.location.streetAddress(); 
  }

  generateCurrentDayNumber(): string {
    return new Date().getDate().toString();
  }

  generateCurrentDateFormatByLocate(locate: string): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString(locate, options);
  }

  generateCurrentDateFormatCypress(locate: string): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return date.toLocaleDateString(locate, options).replaceAll('/', '-');
  }
}

export const fakerDataGenerator = new FakerDataGenerator();

