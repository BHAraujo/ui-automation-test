export interface DisplayValuesLocatorsInterface {
  cpuLoadOfChromeProcessLocator: string;
  memorySizeOfFirefoxProcessLocator: string;
  netWorkSpeedOfChromeProcessLocator: string;
  diskSpaceOfFirefoxProcessLocator: string;

}

export interface DynamicWebTableLocatorsInterface {
  dinamicWebTableLocator: string;
  titleTextLocator: string;
  displayValuesLocator: DisplayValuesLocatorsInterface
}

