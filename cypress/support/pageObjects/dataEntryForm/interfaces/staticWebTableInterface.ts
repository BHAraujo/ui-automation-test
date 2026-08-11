export interface StaticWebTableLocatorsInterface {
  staticWebTableLocator: string;
  titleTextLocator: string;
}

export interface BookDataInterface {
  bookName: string;
  author: string;
  subject: string;
  price: number; 
}

export interface StaticWebTableDataForTestingInterface {
  staticWebTable: BookDataInterface[];
}