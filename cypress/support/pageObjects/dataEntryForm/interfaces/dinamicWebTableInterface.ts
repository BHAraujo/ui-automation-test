export interface DisplayValues {
  cpuLoadOfChromeProcess: string;
  memorySizeOfFirefoxProcess: string;
  netWorkSpeedOfChromeProcess: string;
  diskSpaceOfFirefoxProcess: string;

}

export interface DynamicWebTableLocatorsInterface {
  dinamicWebTableLocator: string;
  titleTextLocator: string;
  displayValues: DisplayValues
}

