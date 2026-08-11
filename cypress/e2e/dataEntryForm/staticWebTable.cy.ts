/// <reference types="cypress" />


import { staticWebTableDataForTesting } from '../../support/pageObjects/dataEntryForm/dataForTesting/staticWebTableDataForTesting.js'
import type { BookDataInterface, StaticWebTableLocatorsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/staticWebTableInterface.js'
import { StaticWebTableHeaders } from '../../support/pageObjects/dataEntryForm/enums/staticWebTableEnum.js'


describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })



  it('should be display all data into the Static Web Table', () => {
    cy.fixture('staticWebTableJson').then((locator: StaticWebTableLocatorsInterface) => {

      cy.prompt([
          `Then verify "${locator.titleTextLocator}" element has the text "Static Web Table"`,
          `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.BOOK_NAME}"`,
          `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.AUTHOR}"`,
          `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.SUBJECT}"`,
          `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.PRICE}"`,
      ])

      staticWebTableDataForTesting.staticWebTable.forEach((tableValue: BookDataInterface) => {
      
      cy.prompt([
        `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.bookName}"`,
        `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.author}"`,
        `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.subject}"`,
        `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.price}"`,
      ])

      })

    })
  })

})