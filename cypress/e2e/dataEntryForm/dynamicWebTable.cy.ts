/// <reference types="cypress" />

import type { DynamicWebTableLocatorsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/dinamicWebTableInterface.js'
import { BrowserNames, DynamicWebTableHeadersEnum } from '../../support/pageObjects/dataEntryForm/enums/dynamicWebTableEnum.js'


describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('should be display all data into the Dynamic Web Table', () => {
    cy.fixture('dinamicWebTableJson').then((locator: DynamicWebTableLocatorsInterface) => {
      cy.prompt([
        `Then verify "${locator.titleTextLocator}" element has the text "Dynamic Web Table"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.NAME}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.DISK}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.NETWORK}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.MEMORY}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.CPU}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.FIREFOX}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.CHROME}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.SYSTEM}"`,
        `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.INTERNET_EXPLORER}"`
      ])

      console.log('Starting display values assertions...')

      cy.get(locator.displayValuesLocator.cpuLoadOfChromeProcessLocator).invoke('text').then(elementText => {
        cy.prompt([
          `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
        ])
      })

      cy.get(locator.displayValuesLocator.memorySizeOfFirefoxProcessLocator).invoke('text').then(elementText => {
        cy.prompt([
          `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
        ])
      })

      cy.get(locator.displayValuesLocator.netWorkSpeedOfChromeProcessLocator).invoke('text').then(elementText => {
        cy.prompt([
          `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
        ])
      })

      cy.get(locator.displayValuesLocator.diskSpaceOfFirefoxProcessLocator).invoke('text').then(elementText => {
        cy.prompt([
          `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
        ])
      })
    })
  })

})