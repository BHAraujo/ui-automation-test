import {fakerDataGenerator} from '../../../fakerData/fakerDataGenerator.js'

export const dataEntryFormDataForTesting = {
  name: fakerDataGenerator.generateRandomName(),
  email: fakerDataGenerator.generateRandomEmail(),
  phone: fakerDataGenerator.generateRandomPhone(),
  address: fakerDataGenerator.generateRandomAddress()
};

