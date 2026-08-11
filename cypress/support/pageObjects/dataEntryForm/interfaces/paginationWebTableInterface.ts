export interface PaginationWebTableDataForTestingInterface {
  paginationOne: PaginationWebTableValuesInterface[];
  paginationTwo: PaginationWebTableValuesInterface[];
  paginationTree: PaginationWebTableValuesInterface[];
  paginationFour: PaginationWebTableValuesInterface[];
  
}

export interface PaginationWebTableValuesInterface {
  id: string;
  name: string;
  price: string;
  select: boolean;
}

export interface PaginationWebTableLocatorsInterface {
  titleTextLocator: string;
  paginationWebTableLocator: string;
  paginationOneButtonLocator: string;
  paginationTwoButtonLocator: string;
  paginationTreeButtonLocator: string;
  paginationFourButtonLocator: string;

}

